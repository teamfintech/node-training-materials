/**
 * JS interpret code in two step
 * first it declares the first-class components of the language
 * then it interpret them line by line to execute the logic
 * and here comes the concept called hoisting
 */

/**
 * Ex.1
 */
name = "nahid";
console.log(name);
var name;

/**
 * Ex.2
 */
console.log(add(10, 5));

function add(a, b) {
    return a + b;
}

/**
 * Ex.3 
 * Initialization is not hoisted only the declaration does
 * default hoisted value is undefined
 */
console.log(age);
age = 27;
var age;


/**
 * Ex.3
 * Funciton can be written and used in any order
 */
console.log(getFormatted());

function getFormatted() {
    return getName() + " : " + getAge();
}

function getName() {
    return name;
}

function getAge() {
    return age;
}