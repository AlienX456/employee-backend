const Pool = require('pg').Pool

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
})

var error = null;

pool.query("DELETE FROM employee_schema.employee")
    .then(result => console.log('Data succesfully removed for testing'))
    .catch(e => error = e)
    .finally(() => pool.end())

if (error){
    throw new Error(e)
}
