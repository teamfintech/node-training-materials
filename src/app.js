const express = require('express');
const {json} = require('body-parser');

// module import
const userModule = require('./users');

const app = express();

app.use(json());

/**
 * Register Routes
 */
userModule.init(app);


app.listen(8080, () => console.log("Listening on port 8080"));