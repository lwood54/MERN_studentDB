const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
        name: {
                type: String,
                required: true
        },
        highScore: Number
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
