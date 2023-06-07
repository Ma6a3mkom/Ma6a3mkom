const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Psii1994zz@',
    host: 'localhost',
    port: 5432,
    database: 'api',

})


module.exports = pool;