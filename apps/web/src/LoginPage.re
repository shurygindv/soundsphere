let component = ReasonReact.statelessComponent("LoginPage");

let make = (_children) => {
    ...component,
    render: _self => React.string("Login page")
}