/**
 * https://en.wikipedia.org/wiki/ECMAScript
 * EcmaScript is the specification for JavaScript
 * Current version is ES12 (2021)
 * The transition from ES5 (2009) to ES6 (2015) was the biggest in ES history
 */

/**
 * ES6 features
 * https://github.com/lukehoban/es6features
 * https://www.sitepoint.com/understanding-es6-modules/
 */


/**
 * Ex.1 
 * Arrow Functions
 */

exports.G =  G = 6.674 * Math.pow(10, -11);

// console.log(this);


const person = {
    name: 'nahid',
    age: 27,
    concat: function() {
        return this.name + " : " + this.age
    },
    greeting: () => {
        return "Hello " + this.name;
    } 
}

// console.log(person.concat());
// console.log(person.greeting());

/**
 * Ex. 2
 * Arrow Functions with classes
 */

class Animal {
    name = null;
    constructor(name) {
        this.name = name;
    }

    details() {
        console.log(this.name);
    }

    greetings = (greet) => {
        console.log(`${greet} ${this.name}`);
    }
}

class Dog extends Animal {
    legs = 4
    constructor() {
        super("Dog")
    }

    details() {
        super.details();
        console.log(this.legs);
    }

    greetings = (greet) => {
        super.greetings(greet)
        console.log(`Which has ${this.legs} legs`)
    }

}

// const dog1 = new Dog();
// dog1.details();
// dog1.greetings("Hi");


/**
 * Ex. 3 
 * Spread Operator
 */

const myObj = {
    name: "nahid",
    age: 27,
    religion: "Islam"
}

const myObj2 = {...myObj};

console.log(myObj2);

console.log(myObj === myObj2);





