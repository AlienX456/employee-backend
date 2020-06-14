const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USERJS,
  host: process.env.HOSTJS,
  database: process.env.DATABASEJS,
  password: process.env.PASSWORDJS,
  port: process.env.PORTJS,
})


const getEmployee = (request, response) => {
    pool.query("SELECT * FROM employee_schema.employee WHERE id="+request.body.id, (error, results) => {
      if (error) {
        response.status(500).send(error)
      }else{
        response.status(200).json(results.rows[0])
      }
    })
}

const getAllEmployee = (request, response) => {

    pool.query("SELECT * FROM employee_schema.employee", (error, results) => {
      if (error) {
        response.status(500).send(error)
      }else{
        response.status(200).json(results.rows)
      }
    })
}

const createEmployee = (request, response) => {
    const { id, fullname, boss, employeeFunction} = request.body
  
    pool.query("INSERT INTO employee_schema.employee (id,fullname,function,boss) VALUES ($1,$2,$3,$4)", [id, fullname, employeeFunction, boss], (error, results) => {
      if (error) {
        response.status(500).send(error)
      }else{
        response.status(201).send({status:`Employee added`})
      }
    })
  }

const sqlReviewCreate = (request, response)  => {
  const { id, fullname, boss, employeeFunction} = request.body
  sql = "INSERT INTO employee_schema.employee (id,fullname,function,boss) VALUES ("+id+","+fullname+","+employeeFunction+","+boss+")";
  console.log(sql);
  response.status(200).send({status:sql})
}

const sqlReviewGetEmployee = (request, response)  => {
  const id = request.body.id;
  sql = "SELECT * FROM employee_schema.employee WHERE id="+id;
  console.log(sql);
  response.status(200).send({status:sql})
}



module.exports = {
    getEmployee,
    getAllEmployee,
    createEmployee,
    sqlReviewCreate,
    sqlReviewGetEmployee
}
