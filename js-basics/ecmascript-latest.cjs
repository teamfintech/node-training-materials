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

console.log(person.concat());
console.log(person.greeting());





