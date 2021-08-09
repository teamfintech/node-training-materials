/**
 * REST API's standardization to being compatible with OpenAPI spec 
 * 1. JSON based communocation
 * 2. User Noun in URL and HTTP Methods as Verbs
 * 3. Use Nested URL for Accessing Nested Resource
 * 4. Handle errors gracefully and use HTTP status codes
 * 5. Allow filter, sorting and pagination via query parameters
 * 6. In Node.js and specially in express security is in your hand
    * 6.1 Use SSL for mandatory
    * 6.2 Use Authentication and Authrization
    * 6.3 Use Proper HTTP headers (Use Helmet package)
    * 6.4 Use Rate limiting techniques to avoid brute force attack and DDOS attack
 * 7. Use versioning for public api's when possible 
 */

const express = require('express');
const {json} = require('body-parser');

const app = express();

app.use(json());


const users = [
   {id: 1, username: 'nahid', password: '1234'},
   {id: 2, username: 'ovi', password: '12345'},
   {id: 3, username: 'arif', password: '123456'},
   {id: 4, username: 'nazmul', password: '1234567'}
]

const images = [
   {id: 1, base64: "base64 image data", userId: 1},
   {id: 2, base64: "base64 image data", userId: 2},
   {id: 3, base64: "base64 image data", userId: 3},
   {id: 4, base64: "base64 image data", userId: 4}
]


// get user with pagination
app.get('/user', (req, res) => {
   const pageNum = parseInt(req.query.page);
   const skip = (pageNum - 1) * 2;
   const limit = skip + 2;
   const filteredUsers = users.filter((el, indx) => {if(indx >= skip && indx < limit) return el});
   return res.status(200).json(filteredUsers);
})


// create a user
app.post('/user', (req, res) => {
   const {username, password} = req.body;
   if(username.toString().length < 3 || password.toString().length < 4) {
      return res.status(400).json({
         message: "Validation Error",
         reason: "Appropriate reason"
      });
   }
   const id = Math.floor(Math.random() * 1000);
   users.push({
      id: id,
      username: username,
      password: password
   })

   return res.status(201).json({
      id: id
   })
   
});


// update a user
app.put('/user/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const {username, password} = req.body;
   if(username.toString().length < 3 || password.toString().length < 4) {
      return res.status(400).json({
         message: "Validation Error",
         reason: "Appropriate reason"
      });
   }
   for(let u of users) {
      if(u.id === id) {
         u.username = username;
         u.password = password;
         return res.status(200).json({
            id: id
         })
      }
   }
   // or 400 invalid user id given
   return res.status(404).json({
      message: "User not found"
   })

});

// delete a user
app.delete('/user/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const index = users.findIndex(u => u.id === id);
   if(index > -1) {
      users.splice(index, 1);
      return res.status(200).json({
         id: id
      })
   }
   // or 400 invalid user id given
   return res.status(404).json({
      message: "User not found"
   })
})


app.listen(8080, () => console.log("Listening on port 8080"));