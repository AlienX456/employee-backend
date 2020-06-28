 //DEPENDENCIES

//PORT FOR SERVE
const port = process.env.PORT


const Pool = require('pg').Pool

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
  })

 
 var assert = require('assert');
 var request = require('supertest')
 const expect = require('supertest').expect;

 var app = require('../index.js')

 var request = request("http://localhost:"+port)

 describe('UNIT TESTS', function() {
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





 describe('INTEGRATION TESTS', function() {


    describe('Registering employees', function(){

        it('employee without boss', function(done){
            request.post('/employee').send( {
                                                id: 1,
                                                fullname: "Jill Valentine",
                                                boss: null,
                                                employeeFunction: "Security"
                                            })
               .expect('Content-Type', /json/)
               .expect(201, done);
        });


        it('employee with boss', function(done){
            request.post('/employee').send( {
                                                id: 2,
                                                fullname: "Claire Redfield",
                                                boss: 1,
                                                employeeFunction: "Security Assistant"
                                            })
               .expect('Content-Type', /json/)
               .expect(201, done);
        });
    })

    describe('Getting employee(s)', function(){

        
        it('Content-Type must be json, should return current employee list on test db', function(done){
            request.get('/employee-all')
               .expect('Content-Type', /json/)
               .expect(200)
               .end(function(err,res){
                assert(res.body, JSON.stringify
                                (
                                [
                                    {
                                        "id": 1,
                                        "fullname": "Jill Valentine",
                                        "boss": null,
                                        "function": "Security"
                                    },
                                    {
                                        "id": 2,
                                        "fullname": "Claire Redfield",
                                        "boss": 1,
                                        "function": "Security Assistant"
                                    }
                                ]
                                )
                )
                done()
            })
        });


        it('Content-Type must be json for an employee, must return employee with id 1 on test db', function(done){
            request.get('/employee').send({"id":1})
               .expect('Content-Type', /json/)
               .expect(200)
               .end(function(err,res){
                    assert(res.body, JSON.stringify
                                (
                                {
                                    id: 1,
                                    fullname: 'Jill Valentine',
                                    boss: null,
                                    function: 'Security'
                                }
                                )
                    )
                    done()
               })
        });


    })

});
