const express = require('express');
const { json } = require('body-parser');

// module import
const userModule = require('./users');
const roleModule = require('./roles');

const errorHandler = require('./middlewares/error-handler.middle');

const app = express();

app.use(json());


// for handling uncaught exception from application
process.on("uncaughtException", (err) => {
    console.error("[ERROR] Uncaught Exception : ", err.message);
    process.exit(1);
});


process.on("unhandledRejection", (error) => {
    console.error("[ERROR] From event: ", error?.toString());
    process.exit(1);
});
/**
 * Register Routes
 */
userModule.init(app);
roleModule.init(app);

/**
 * Register Error Handler
 */
app.use(errorHandler);


app.listen(8080, () => console.log("Listening on port 8080"));