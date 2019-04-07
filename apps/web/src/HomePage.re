let component = ReasonReact.statelessComponent("HomePage");

let make = (_children) => {
    ...component,
    render: _self => React.string("Home page")
}