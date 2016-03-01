## README
Isomorphic app that talk to rails API

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
    "test": "./node_packages/.bin/jasmine-node spec"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/jchappypig/online-application-react-redux-node.git"
  },
  "keywords": [
    "react",
    "redux",
    "node",
    "rails",
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

### install Express (node framework)

```sh
npm install express --save
```
--save option is to save the dependency onto your package.json file, like gemfile in rails

### install Jasmine (test framework)

```sh
npm install request --save
npm install jasmine-node --save
```

How to run jasmine test?

```sh
./node_packages/.bin/jasmine-node spec
```

Reference
https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-jasmine