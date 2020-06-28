# REPOSITORY TO DEPLOY ON HEROKU

Using:

1. Code Deploy
2. Code Pipeline
3. EC2

4. Serve on : https://employee-backend-bogota.herokuapp.com/

    GET /employee -- Get an employee | non use for now (body required type {id:number})


    GET /employee-all -- Get a list of all employees


    POST /employee -- Create a new employee (body required type   {"id": 11111111,"fullname": "Jill Valentine","boss": null,"function": "Security"} )


Install:

1. Install nodejs
2. run "npm install" to install all dependencies
3. run "./node_modules/mocha/bin/mocha" for test, remember remove id 11111111 which is added for testing
4. run "node index.js" to serve
