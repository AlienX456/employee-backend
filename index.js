//DEPENDENCIES
const express = require('express')
const app = express()
var cors = require('cors')

//QUERIES
const db = require('./queries')


//PORT FOR SERVE
const port = process.env.PORT


app.use(cors())
app.use(express.json())
//API OPERATIONS

app.get('/employee',db.getEmployee)

app.get('/employee-all',db.getAllEmployee)

app.post('/employee',db.createEmployee)

app.post('/testInsertEmployee',db.sqlReviewCreate)

app.get('/testEmployee',db.sqlReviewGetEmployee)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})