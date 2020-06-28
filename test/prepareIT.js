const Pool = require('pg').Pool

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
})



pool.query("DELETE FROM employee_schema.employee")
    .then(result => console.log('Data succesfully removed for testing'))
    .catch(e => console.error(e))
    .finally(() => pool.end())