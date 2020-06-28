const Pool = require('pg').Pool

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
})

var myerror = null;


pool.query("DELETE FROM employee_schema.employee")
    .then(result => console.log('Data succesfully removed for testing'))
    .then(e => console.log(e))
    .finally(() => pool.end())