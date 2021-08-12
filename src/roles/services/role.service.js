const db = require('../../db');

async function getRoles() {
    const roles = await db.query("SELECT * FROM cities");
    return roles.rows;
}


module.exports = {
    getRoles
}