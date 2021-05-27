const app = {
    title: 'Visibility',
    details: 'Here are the details'
};
let myVisibleValue = null;

const buttonValue = {
    visible: 'Show Details',
    hide: 'Hide Details'
};

const visibility = (e) => {
    e.preventDefault();
    if(myVisibleValue == null){
        myVisibleValue = app.details;
    } else {
        myVisibleValue = null;
    }
    render();
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        <button onClick={visibility}>{myVisibleValue == null ? buttonValue.visible : buttonValue.hide}</button>
        <h1 name="visibleValue">{myVisibleValue}</h1>
        </div>
    )
    ReactDOM.render(template, appRoot);
}
render();

