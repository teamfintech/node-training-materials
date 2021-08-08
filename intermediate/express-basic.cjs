/**
 * Express.js is a minimalistic web framework for node.js
 * Most popular and one of the most powerful web framework for Microservices
 * https://expressjs.com/
 */


/**
 * Ex.1 
 * Why not node HTTP module
 */

// const http = require("http");

// const users = [];

// function getReqData(req) {
//     return new Promise((resolve, reject) => {
//         try {
//             let body = "";
//             // listen to data sent by client
//             req.on("data", (chunk) => {
//                 // append the string version to the body
//                 body += chunk.toString();
//             });
//             // listen till the end
//             req.on("end", () => {
//                 // send back the data
//                 resolve(body);
//             });
//         } catch (error) {
//             reject(error);
//         }
//     });
// }

// http.createServer(async (req, res) => {
//     if (req.url === "/user" && req.method === "GET") {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(users));
//     }
//     else if (req.url === "/user" && req.method === "POST") {
//         let body = await getReqData(req);
//         body = JSON.parse(body);
//         const id = Math.floor(Math.random() * 1000);
//         users.push({
//             id: id,
//             name: body.name,
//             age: body.age
//         })
//         res.writeHead(201, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify({
//             id: id
//         }));
//     }

// }).listen(8080, () => console.log("Listening on port 8080"));


/**
 * Ex.2
 * Express basic
 */
const express = require('express');
const {json} = require('body-parser');

const app = express();

app.use(json());

const users = [];

// get request
app.get('/user', (req, res) => {
    return res.status(200).json(users);
})

// post request
app.post('/user', (req, res) => {
    const id = Math.floor(Math.random() * 1000);
    users.push({
        id: id,
        name: req.body.name,
        age: req.body.age
    })
    return res.status(201).json({
        id: id
    })
})

app.listen(8080, () => console.log("Listening on port 8080"));