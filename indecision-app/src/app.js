console.log('app.js is running');

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info!</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
    );

var templateTwo = (
    <div>
        <h1>Praneeth Pidugu</h1>
        <p>Age: 32</p>
        <p>Location: Philadelphia</p>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);