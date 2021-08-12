const { Pool } = require('pg')
const { appConf } = require('./configs/app.config');

console.log("Initializing Database");

const pool = new Pool({
    user: appConf.DB_USER,
    host: appConf.DB_HOST,
    database: appConf.DB_NAME,
    password: appConf.DB_PASSWORD,
    port: appConf.DB_PORT,
})



module.exports = {
    query: (text, params) => pool.query(text, params),
}