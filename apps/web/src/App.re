let component = ReasonReact.statelessComponent("App");

let make = (_children) => {
    ...component,
    render: _self => ReasonReact.string("Hello world")
}