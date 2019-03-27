// define express server
const express = require('express');

// define body parser
const bodyParser = require('body-parser');

// define mongoose to simplify mongoDB
const mongoose = require('mongoose');

// define shortcut route
const students = require('./routes/api/students');

// initialize express app
const app = express();

// use bodyParder middleware
app.use(bodyParser.json());

// define DB
const db = 'mongodb://lwood:publicpassword123@ds163255.mlab.com:63255/public-code';

// connect using mongoose
mongoose.connect(db, { useNewUrlParser: true })
        .then(db => {
                console.log('connected to database ---> ', db.connections[0].name);
        })
        .catch(error => console.log('error: ', error));

// use routes and pass route shortcut variable
// a route that uses 'api/students' will access shortcut above
// and be taken to
app.use('/api/students', students);

// define port
const port = process.env.PORT || 5000;

// listen to port
app.listen(port, () => {
        console.log(`Server running on ${port}!`);
});
