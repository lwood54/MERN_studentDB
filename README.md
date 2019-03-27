## basic MERN pattern setup

- server.js

* // define express server
* // define bodyParder
* // define express server
* // define body parser
* // define mongoose to simplify mongoDB
* // define shortcut route
* // initialize express app
* // use bodyParder middleware
* // define DB
* // connect using mongoose
* // use routes and pass route shortcut variable
* // deifine port
* // listen to port

## package.json

- add dependencies:
     - express, body-parser, nodemon (development), mongoose, concurrently
- add scripts

```
"scripts": {
        "client-install": "npm install --prefix client",
                "start": "node backend/server.js",
                "server": "nodemon backend/server.js",
                "client": "npm start --prefix client",
                "dev": "concurrently \"npm run server\" \"npm run client\""
}
```

## defining routes

- create routes/api
- import express
- define router from express
- import model that will help make queries to the db
- create routes
     - router.get()
     - router.post()
     - router.delete()
- create a route to get the data
- create a route to add a document or instance
- crate a route to delete a document or isntance

* export router

## Defining Models and Schemas

- import mongoose
- access Schema from mongoose
- define Schema
- define model using created schema
- export model
