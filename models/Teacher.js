const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    teacher_id: {
        type: String,
        required: [true, 'Please add Teacher ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Teacher ID cannot exceed 10 character']
    },
    teacher_name: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter Teacher's name`]
    },
    date_start: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter date started`]
    },
    assign_school: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter assign school`]
    }
});

mongoose.models = {};

module.exports = mongoose.model.Teacher || mongoose.model('Teacher', TeacherSchema);