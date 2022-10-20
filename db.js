const Pool = require('pg').Pool
const pool = new Pool( {
    user: "postgres",
    password: "admin",
    host: "localhost",
    port: 8080,
    database:"tabledb"
})

module.exports = pool