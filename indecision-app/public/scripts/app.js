'use strict';

console.log('app.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info!'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        ),
        React.createElement(
            'li',
            null,
            'Item Three'
        )
    )
);

var userName = 'Praneeth';
var user = {
    username: 'Praneeth',
    Age: 32,
    Location: 'Kitchener'
};

var userLocation = function userLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return 'Unknown';
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.username ? user.username.toUpperCase() : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.Age >= 18 ? user.Age : 'Minor'
    ),
    userLocation(user.Location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
