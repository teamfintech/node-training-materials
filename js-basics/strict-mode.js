/**
 * If you want to avoid some declaration related problem use strict mode
 */

/**
 * Ex.1
 */

"use strict";

name = "nahid";
console.log(name);

/**
 * Ex.2
 */
console.log(getPI());
function getPI() {
    pi = 3.1416;
    return pi;
}

/**
 * Ex.3
 * writing get only property is not allowed in strict mode
 */

const payload = {
    firstName: "nahid",
    lastName: "chowdhury",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(payload.fullName);
payload.fullName = "no name";
console.log(payload.fullName);
