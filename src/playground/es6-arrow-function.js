const square = function(x) {
    return x * x;
}

console.log(square(2));

const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(2));

const getFirstName = (fn) => {
    return fn.split(' ')[0];
}
console.log(getFirstName('Mike Star'));

const getFirstNameArrow = (fn) => fn.split(' ')[0];

console.log(getFirstNameArrow('Mike Star'));