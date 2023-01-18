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

var userName = 'Praneeth';
var user = {
    username: 'Praneeth',
    Age: 32,
    Location: 'Kitchener'
}

var userLocation = (location) => {
    if(location){
        return <p>Location: {location}</p>;
    } else {
        return 'Unknown';
    }
    
}

var templateTwo = (
    <div>
        <h1>{user.username ? user.username.toUpperCase() : 'Anonymous'}</h1>
        <p>Age: {user.Age >= 18 ? user.Age : 'Minor'}</p>
        {userLocation(user.Location)}
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);