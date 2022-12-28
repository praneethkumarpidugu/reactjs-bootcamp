"use strict";

console.log('app.js is running');

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info!"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        ),
        React.createElement(
            "li",
            null,
            "Item Three"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Praneeth Pidugu"
    ),
    React.createElement(
        "p",
        null,
        "Age: 32"
    ),
    React.createElement(
        "p",
        null,
        "Location: Philadelphia"
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
