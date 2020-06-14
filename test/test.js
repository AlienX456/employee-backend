 //DEPENDENCIES

//PORT FOR SERVE
const port = 4000

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'employee_db',
  password: 'admin01',
  port: 6000,
})


 
 var assert = require('assert');
 var request = require('supertest')
 var app = require('../index.js')

 var request = request("http://localhost:4000")

 describe('SQL syntax test', function() {
        it('Compare sql when gets an Employee', function(done){
            request.get('/testEmployee').send({"id":1})
            .expect(200, {status:'SELECT * FROM employee_schema.employee WHERE id=1'}, done)
        }),
        it('Compare sql string when try to insert', function(done){
            request.post('/testInsertEmployee').send( {
                                                        id: 11111111,
                                                        fullname: "Jill Valentine",
                                                        boss: null,
                                                        employeeFunction: "Security"
                                                    })
               .expect(200, {status:'INSERT INTO employee_schema.employee (id,fullname,function,boss) VALUES (11111111,Jill Valentine,Security,null)'},done);
        })
});






/*

Remember erase jill before each integration test

*/

 describe('employees', function() {
    describe('GET', function(){
        it('Content-Type must be json for list of employees', function(done){
            request.get('/employee-all')
               .expect('Content-Type', /json/)
               .expect(200, done);
        });
    }),
    describe('GET', function(){
        it('Content-Type must be json for an employee', function(done){
            request.get('/employee').send({"id":1})
               .expect('Content-Type', /json/)
               .expect(200, done);
        });
    })
    describe('POST', function(){
        it('Test register employee', function(done){
            request.post('/employee').send( {
                                                id: 11111111,
                                                fullname: "Jill Valentine",
                                                boss: null,
                                                employeeFunction: "Security"
                                            })
               .expect('Content-Type', /json/)
               .expect(201, done);
        });
    })
});
