let count = 0;

const addOne = () => {
    count++;
    counterRenderApp();
};

const minusOne = () => {
    count--;
    counterRenderApp();
};

const reset = () => {
    count = 0;
    counterRenderApp();
};


var appRoot = document.getElementById("app");

const counterRenderApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);
};

counterRenderApp();