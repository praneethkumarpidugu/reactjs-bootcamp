class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }

    hasHomeLocation() {
        return !!this.homelocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += `Has homeLocation: ${this.homelocation}`;
            return greeting;
        }
    }
}
const me = new Student('Andrew', 26, 'CS');
console.log(me);
console.log(me.getDescription());

const be = new Student();
console.log(be.getGreeting());
console.log(be.getDescription());

const ge = new Traveller('Andrew', 26, 'hyd');
console.log(ge.getGreeting());