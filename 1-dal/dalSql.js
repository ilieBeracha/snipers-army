const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'army'
});

async function execute(query, params) {
    return pool.promise().execute(query, params);
}

module.exports = execute