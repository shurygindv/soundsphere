module LoginForm = {
    open Formality;
    type field = 
      | Email
      | Password;

    type state = {
        email: string,
        password: string
    };

    type message = string;

    module EmailField = {
        let update = (state, value) => {...state, email: value};

        let validator = {
            field: Email,
            strategy: Strategy.OnFirstChange,
            dependents: None,
            validate: ({email}) => {
                switch (email) {
                | "" => Error("Email is required")
                | _ => Ok(Valid)
                }
            }
        };
    }


    module PasswordField = {
        let update = (state, value) => {...state, password: value};

        let validator = {
            field: Password,
            strategy: Strategy.OnFirstChange,
            dependents: None,
            validate: ({password}) => {
                switch (password) {
                | "" => Error("Email is required")
                | _ => Ok(Valid)
                }
            }
        }
    }

    let validators = [EmailField.validator, PasswordField.validator];
}

module LoginFormContainer = Formality.Make(LoginForm);

let component = ReasonReact.statelessComponent("LoginPage");

let make = (_children) => {
    ...component,
    render: _ => (
        <LoginFormContainer
          initialState={email: "", password: ""}
          onSubmit=((state, form) => {

          })>
          ...{form => (
              <form></form>
          )}
        </LoginFormContainer>
    );
}