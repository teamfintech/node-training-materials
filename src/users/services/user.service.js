const db = require('../../db');

function createUser(mobile, password) {
    console.log("[INFO] I am creating a user"); // insert into user values()
    const id = Math.floor(Math.random() * 1000);
    return id;
}

async function getUser() {
    const users = await db.query("SELECT * FROM users");
    return users.rows;
}

module.exports = {
    createUser,
    getUser
}