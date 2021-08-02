/**
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
 * Synchronous code is line by line interpretation of code
 * And when blocking code arrives the CPU wait for the code to finish and remains idle
 * Due to inefficiencies of synchronous program JavaScript is by default Asynchronous
 * JS is single threaded and do blocking tasks in seprate worker process 
 * While worker process do the blocking task JS main thread serve sync task as usual
 * utilizing max of the cpu's  
 */
const fs = require('fs');


/**
 * JS achive asynchronous programming using concepts called callback, promises and Async/Await
 */


/**
 * Ex. 1
 * Callback is the oldest approach for async programming
 * still havily used in nodejs code
 */

function httpRequest(id, callback) {
    // dummy delay we are mocking a http call 
    console.log("function start")
    setTimeout(() => {
        console.log("In async code");
        callback({
            id: id,
            name: 'nahid',
            age: 27
        })
    }, 3000);
    console.log("function finish")
}

// httpRequest(10, function(result) {
//     console.log(result);
// })


/**
 * Ex. 2 
 * use of callback in nodejs core module
 */
// fs.readFile('./README.md', (err, res) => {
//     if (err) console.log(err.toString())
//     else console.log(res.toString());
// })


/**
 * Ex. 3
 * Promises are introduced to save us from callback hell
 * Promise class represent a result from the future
 */

function httpRequestPromise(id) {
    return new Promise((resolve, reject) => {
        // dummy delay we are mocking a http call 
        if (id < 0) reject(new Error("Invalid ID"));
        else {
            setTimeout(() => {
                resolve({
                    id: id,
                    name: 'nahid',
                    age: 27
                })
            }, 3000);
        }

    });
}

// ussage of promise
// httpRequestPromise(-10)
//     .then(function(res) {
//         console.log(res);
//     })
//     .catch(function(err) {
//         console.log("[ERROR] ", err);
//     })

// how we saved from callback hell
// httpRequestPromise(10)
//     .then(function (res) {
//         console.log(res);
//         return httpRequestPromise(5);
//     })
//     .then(function (res) {
//         console.log(res);
//     })
//     .catch(function (err) {
//         console.log("[ERROR] ", err);
//     })