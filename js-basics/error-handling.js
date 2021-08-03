/**
 * Error handling in node js is slightly different because of it's async nature
 * There are two type of error handling in nodejs
 * Synchronous and Asynchronous error handling
 * Synchronous error handling is like any other language
 * Asynchronous error handling is node js specific  
 */

const { default: axios } = require('axios');
const fs = require('fs');

/**
 * Ex.1 
 * Synchronous error handling with try/catch
 */

//  const value = 10000; 
// //  throw new Error("Some Error Occured");
//  console.log(value);

// try {
//     const value = 10000; 
//     // throw new Error("Some Error Occured");
//     console.log(value);
// }
// catch (ex) {
//     console.log("[ERROR]  Just Continue..")
// }

// console.log("[INFO] Outside of try catch");


/**
 * Ex.2 
 * Finally statement
 */

// try {
//     console.log("connecting to database");
//     // throw new Error("Some Error Occured");
//     console.log("database connection established")
// }
// catch (ex) {
//     console.log("[ERROR]  Just Continue..")
// }
// finally {
//     console.log("Closing database connection")
// }


/**
 * Ex.3 
 * try/catch normally don't work with async code
 */

// function errorTest() {
//     try {
//         setTimeout(() => { throw new Error("From Async code") }, 2000);
//     }
//     catch (ex) {
//         console.log("[ERROR] In catch")
//     }
// }
// errorTest();


/**
 * Ex.4 
 * Async error can be resolved using err object in callback and catch block for promises
 */

function usingCallback(callback) {
    fs.readFile('./README.md', (err, res) => {
        if (err) callback(err, null);
        else callback(null, res.toString());
    })
}

// usingCallback(function(err, res) {
//     console.log(err);
//     console.log(res);
// })


/**
 * Ex.5
 * Promise based catch function for error handling
 */

function promiseError() {
    return new Promise(function(resolve, reject) {
        axios.get('https://www.nahidchowdhury.com').catch((e) => reject(e));
    });
}

// promiseError().then(() => console.log("in then")).catch((e) => console.log("in catch"));