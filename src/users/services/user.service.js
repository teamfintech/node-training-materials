const db = require('../../db');

async function createUser(username, password) {
    console.log("[INFO] I am creating a user"); // insert into user values()
    const result = await db.query("INSERT INTO users(username) values($1) RETURNING id",
        [username]
    );
    return result.rows[0].id;
}

async function getUser() {
    const users = await db.query("SELECT * FROM users");
    return users.rows;
}

module.exports = {
    createUser,
    getUser
}