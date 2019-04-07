module Types = {
    type page = 
      | LoginPage
      | HomePage
}

type state = {
    page: Types.page
}
type actions = 
    | ChangePage(Types.page);

    
let mapUrlToPage = (url: ReasonReact.Router.url) : Types.page =>
    switch (url.path) {
    | ["login"] => LoginPage
    | ["home"] => HomePage
    | _ => LoginPage
};

let component = ReasonReact.reducerComponent("App");

let make = (_children) => {
    ...component,
    initialState: () => {
        page: mapUrlToPage(ReasonReact.Router.dangerouslyGetInitialUrl()),
    },
    didMount: self => {
        let warcherId =
            ReasonReact.Router.watchUrl(url =>
              self.send(ChangePage(mapUrlToPage(url)))
            );
  
        self.onUnmount(() => ReasonReact.Router.unwatchUrl(warcherId));
    },
    reducer: (action, state) => 
        switch (action) {
        | ChangePage(page) => ReasonReact.Update({...state, page})
        | _ => ReasonReact.NoUpdate
        }
    ,
    render: self => 
        switch(self.state.page) {
        | LoginPage => <LoginPage />
        | HomePage => <HomePage />
        }
}