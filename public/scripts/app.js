'use strict';

var app = {
    title: 'Visibility',
    details: 'Here are the details'
};
var myVisibleValue = null;

var buttonValue = {
    visible: 'Show Details',
    hide: 'Hide Details'
};

var visibility = function visibility(e) {
    e.preventDefault();
    if (myVisibleValue == null) {
        myVisibleValue = app.details;
    } else {
        myVisibleValue = null;
    }
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: visibility },
            myVisibleValue == null ? buttonValue.visible : buttonValue.hide
        ),
        React.createElement(
            'h1',
            { name: 'visibleValue' },
            myVisibleValue
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
