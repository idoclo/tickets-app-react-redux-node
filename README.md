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

Reference:
https://github.com/sequelize/cli

sequelize model:create --name tickets --attributes device_type:string,device_serial_no:string,device_model:string,device_screen_size:string,contact_name:string,contact_email:string