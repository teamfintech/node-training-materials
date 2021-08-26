const db = require('../../db');

async function createUserImage(data, mimeType) {
    const sql = `INSERT INTO user_image(data, mimeType) values($1, $2) RETURNING id`;
    const result = await db.query(sql, [data, mimeType]);

    return result.rows[0].id;
}


async function getUserImage(id) {
    const sql = `SELECT * FROM user_image WHERE id = $1`
    const result = await db.query(sql, [id]);
    if(result.rowCount >= 1) return result.rows[0] 
    return null;
}

module.exports = {
    createUserImage,
    getUserImage
}