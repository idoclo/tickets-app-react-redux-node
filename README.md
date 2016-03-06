## README
React Redux and Node as an API

![alt text](http://nerds.airbnb.com/wp-content/uploads/2013/11/isomorphic-client-server-mvc.png "You see this because you are smart")

### Setup npm (node package management)

```sh
npm init
```

It will generate a package.json file

example:
>
{
  "name": "online-application-react-redux-node",
  "version": "1.0.0",
  "description": "Isomorphic app that talk to rails API",
  "main": "index.js",
  "scripts": {
    "test": " mocha"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/jchappypig/online-application-react-redux-node.git"
  },
  "keywords": [
    "react",
    "redux",
    "node",
    "api"
  ],
  "author": "Huanhuan Huang",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/jchappypig/online-application-react-redux-node/issues"
  },
  "homepage": "https://github.com/jchappypig/online-application-react-redux-node",
  "dependencies": {
    "express": "^4.13.4"
  }
}
>

npm now is ready to use. Let's install some dependency.

brew update
brew doctor
brew upgrade node

create folder 'test'
npm install mocha --save-dev -g
npm install chai --save-dev

npm install --save pg 
npm install --save sequelize
npm install --save-dev -g sequelize-cli

http://docs.sequelizejs.com/en/latest/docs/migrations/

psql postgres
create db

sequelize init
config config/config.json
sequelize migration:create --name create_table_tickets
sequelize help:db:migrate

npm install -g express-generator --save-dev

We will need to a start scrip for npm start as a server

express server

node server/bin/www
"scripts": {
    "test": "mocha",
    "start": "node server/bin/www"
  }
  
  connect sequelize with node

sequelize db:migrate:undo --config server/config/config.json --migrations-path server/migrations

sequelize model:create --name tickets --attributes device_type:string --config server/config/config.json --migrations-path server/migrations --models-path server/models

create .sequelizerc file to move those flags into config
var path = require('path')

module.exports = {
  'config':          path.resolve('server', 'config/database.json'),
  'migrations-path': path.resolve('server', 'migrations'),
  'models-path':     path.resolve('server', 'models')
}

also need to config the models/index.js to point to the right config/database.json file.


Reference:
https://github.com/sequelize/cli

sequelize model:create --name Ticket --attributes device_type:string,device_serial_no:string,device_model:string,device_screen_size:string,contact_name:string,contact_email:string

var models  = require('./server/models');
models.Ticket.create({device_type: 'IPhone', device_serial_no: 'uat1234', device_model: 'IPhone6sPlus', contact_name: 'Huanhuan Huang', contact_email: 'jchappypig@hotmail.com'});

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
  
Not cover
- Continuous deployment (CI, AWS deployment)
- Test
- server side rendering
- redux development tool
- react hot loader
- others