const app = {
    title: 'MyTitle',
    options: []
};

const submitForm = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById("app");

const numbers = [22, 10, 2];
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>Options: {app.options.length}</p>
            <form onSubmit={submitForm}>
                <input type="text" name="option"/>
                <button  disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
                <button>Add Option</button>
                <button onClick={removeAll}>Remove all</button>
            </form>
            {
                numbers.map((number) => {
                    return <p key={number}>{number * 2}</p>;
                })
            }
            <p>My Options</p>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
render();