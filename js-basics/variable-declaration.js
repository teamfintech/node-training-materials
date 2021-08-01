/**
 * Variable can be declared in four ways in JS
 * only name, var, let and const
 */

/**
 * Ex.1
 */
// only name
name = "nahid";
console.log(name);

// using var
var age = 27;
console.log(age);

// using let
let department = "IT";
console.log(department);

// using const
const religion = "ISLAM";
console.log(religion);

/**
 * Ex.2
 * var is global scoped or local/function scoped
 */
function varTest() {
    if(true) {
        var salary = 100000;
    }
    console.log(salary);
}
varTest()

/**
 * Ex.3 
 * let is block scoped
 */
function letTest() {
    if(true) {
        let salary = 100000;
    }
    // console.log(salary);
}
letTest();

/**
 * Ex. 4
 * const is block scoped and reference can not be changed
 */
function constTest() {
    if(true) {
        const salary = 100000;
    }
    
    // console.log(salary);
}
constTest();

/**
 * Changing value in const !!!
 * How ?
 */
const payload = {
    username: "nahid",
    password: "1234"
}
console.log(payload);
payload.password = "123456";
console.log(payload);