// arguments => no longer bound with arrow functions

const multiple = (a, b) => {
    // console.log(arguments);
    return a * b;
}

multiple(1, 2);
// this identifier => no longer bound with arrow functions
const myArea = {
    name : "Praneeth",
    cities: ['hyderabad', 'vizag', 'secunderabad'],
    // ES6 style of writing methods
    printPlacesLived() {
        this.cities.forEach(city => {
            console.log(this.name + ' Lived at ' + city);
        });
    }
}

const myAreaMap = {
    name: 'Praneeth',
    cities: ['hyderabad', 'vizag', 'secunderabad'],
    printPlacesLivedMap() {
        return this.cities.map((city) => this.name + ' Live in ' + city);    
    }
};
console.log(myAreaMap.printPlacesLivedMap());

const multiplier = {
    numbers: [1, 3, 6],
    numberVar: 2,
    multiplierResult() {
        return this.numbers.map((number) => this.numberVar * number);
    }
}

console.log(multiplier.multiplierResult());