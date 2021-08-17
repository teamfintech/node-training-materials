const express = require('express');
const { json } = require('body-parser');

// module import
const userModule = require('./users');
const roleModule = require('./roles');

const app = express();

app.use(json());


// process.on("unhandledRejection", (error) => {
//     console.error("[ERROR] From event: ", error?.toString());
//     // process.exit(1);
// });
/**
 * Register Routes
 */
userModule.init(app);
roleModule.init(app);


app.listen(8080, () => console.log("Listening on port 8080"));