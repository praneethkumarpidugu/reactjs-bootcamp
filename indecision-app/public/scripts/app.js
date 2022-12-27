console.log('app.js is running');

// var template = <p>This is JSX from app.js</p>;
var template = /*#__PURE__*/React.createElement("p", null, "This is from JS");
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);