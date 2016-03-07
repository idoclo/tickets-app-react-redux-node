## README
React, Redux, React Router SPA and Node as an API
![alt text](http://nerds.airbnb.com/wp-content/uploads/2013/11/isomorphic-client-server-mvc.png "You see this because you are smart")

### Project setup
1. Create a github repo
2. Upgrade your node
```sh
brew update
brew doctor
brew upgrade node
```
3. Setup npm, and generate a package.json
```sh
git clone <your repo>
cd <your repo name>
npm init
```
4. We are going to seperate the projects the following structure
--client
--server

### First, let's go to server part (Nodejs)
1. Create an express server

We are going to create the server using **express-generator**
```sh
npm install -g express-generator
```
**-g** option is to intall node module gobally, so that we can use **express** command in our terminal
2. Express a server
```sh
express server
```
Now you actually have your basic server setup on your server folder. But we want to start up the app on the root folder, not the server folder. What we can do?
3. Move client code and config code out and keep server code under server folder
- remove <root_folder>/server/package.json
- In your <root_folder>/package.json
add a startup scrip under **scripts** secion
>"start": "node ./server/bin/www"
- Add the following dependencies in the <root_folder>/package.json under **dependencies** secion
```
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
```
- move folder public to root folder
4. Startup your server, and have a look
```sh
npm start
```
5. Have the the folders structure under server
6. Try to create our own routes for tickets like example code for users in server
7. remove users
### Time to move to DB (postgres + sequelize)
1. Sequelize is like Ruby on rails Active Record
```sh
npm install --save pg 
npm install --save sequelize
npm install --save-dev -g sequelize-cli
```
2. Setup Sequalize
```sh
sequalize init 
```
It creates some folders **config, migrations, models, seeders** for database. Move those generated folders to **server** folder

Update server/config/config.json (similiar to database.yml for Ruby on rails) for database config
```
{
  "development": {
    "database": "tickets_development",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "database": "tickets_test",
    "host": "localhost",
    "dialect": "postgres"
  }
}
```
3. Manually create the database (Maybe there is a way to automatic it, needs to find out)
```sh
psql postgres
postgres=# CREATE DATABASE tickets_development;
postgres=# CREATE DATABASE tickets_test;
postgres=# \q;
```
4. Now the happy path. Sequelize can help us to do the rest.

Examples:

sequelize model:create

sequelize db:migrate

sequelize db:migrate:undo

5. Create our first model
```sh
sequelize model:create --name Ticket --attributes device_type:string,device_serial_no:string,device_model:string,device_screen_size:string,contact_name:string,contact_email:string
```

You may notice that when we run sequelize command, we always need to providing options of the model config and migration path ( --config server/config/config.json --migrations-path server/migrations --models-path server/models ). It's because, we move the folders! 

6. Customize sequelize command
To make our lives easier in the future, we can config them in file .sequelizerc
Create a file call **.sequelizerc** under root folder

Put the following into the file
```
var path = require('path')

module.exports = {
  'config':          path.resolve('server', 'config/database.json'),
  'migrations-path': path.resolve('server', 'migrations'),
  'models-path':     path.resolve('server', 'models')
}
```
rename file server/config/config.json to server/config/database.json

Reference:

http://docs.sequelizejs.com/en/latest/docs/migrations/

https://github.com/sequelize/cli

7. Migrate the db
```sh
sequelize db:migrate
```

### Connect Node with Sequelize
1. update /tickets action

How to talk to models in node code? easy

var models  = require('../models');
models.Ticket.build({})
models.Tickets.create({})
models.Ticket.findAll()
models.Ticket.findOne()
models.Ticket.findById()
Those methods will return a **promise**

for GET /tickets, it would be

```
var models  = require('../models');
```
```
router.get('/', function(req, res, next) {
  models.Ticket.findAll().then(function(users){
    res.json(users);
  });
});
```

for POST /tickets, it would be

```
router.post('/', function(req, res) {
  var device_type = req.body.device_type;
  var device_serial_no = req.body.device_serial_no;
  var device_model = req.body.device_model;
  var device_screen_size = req.body.device_screen_size;
  var contact_name = req.body.contact_name;
  var contact_email = req.body.contact_email;

  var ticket = models.Ticket.build({
    device_type: device_type,
    device_serial_no: device_serial_no,
    device_model: device_model,
    device_screen_size: device_screen_size,
    contact_name: contact_name,
    contact_email: contact_email
  });

  ticket.save()
    .then(function() {
      res.status(201).send('Ticket created successfully');
  }).catch(function(error) {
    res.status(400).send('There is a problem when trying to create a ticket : ' + error);
  });
});
```

References:

http://docs.sequelizejs.com/en/latest/docs/instances/

http://docs.sequelizejs.com/en/latest/docs/models-usage/

2. Test with postman

## Here comes to client (React, Redux, Babel, ES6, Webpack, Redux Router)






npm install webpack -g
npm install webpack --save
npm install webpack-dev-server -g
 npm install webpack-dev-server --save
npm install --save-dev babel-loader babel-core
npm install immutable --save
npm install react-dom --save
npm install react --save
  npm install react-redux --save
  npm install redux --save
  npm install babel-preset-es2015 --save-dev
  npm install babel-preset-react --save-dev
  
npm install --save react-router
npm install file-loader --save-dev

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi


## connect react with bootstrap

npm install react-bootstrap  --save
npm install bootstrap  --save

https://github.com/reactjs/react-router-tutorial/blob/start/lessons/02-rendering-a-router.md

Setup react with routes

npm install react-router-redux --save
npm install jquery --save
npm install --save redux-actions
 npm install immutable --save
 
  npm install --save redux-logger redux-thunk
  npm install --save-dev react-hot-loader
  npm install --save-dev webpack-hot-middleware
  
  https://github.com/tj/frontend-boilerplate

Not cover
- Continuous deployment (CI, AWS deployment)
- Test
- server side rendering
- redux development tool
- react hot loader
- others