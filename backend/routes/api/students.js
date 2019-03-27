// import express to get router
const express = require('express');

const router = express.Router();

// bring in DB model to use in query
const Student = require('../../models/Student');

// create routes
// @route       GET api/items
// @desc        Gets all documents from collection
// @access      public
router.get('/', (req, res) => {
        Student.find()
                .sort({ highScore: 1 })
                .then(student => res.json(student));
});

router.post('/', (req, res) => {
        console.log('req: ', req.body);
        const newStudent = new Student({
                name: req.body.name,
                highScore: req.body.highScore
        });
        newStudent.save().then(student => {
                console.log('student in post: ', student);
                res.json(student); // res.json() wraps the JS object and converts it to json
        }); // returns new student after it's saved to DB
});

module.exports = router;
