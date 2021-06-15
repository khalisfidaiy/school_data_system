const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new mongoose.Schema({
    student_id: {
        type: String,
        required: [true, 'Please add Student ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Student ID cannot exceed 10 character']
    },
    student_fullname: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter Student's name`]
    },
    date_of_birth: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter date of birth`]
    },
    father_fullname: {
        type: String,
        required: true,
        maxlength: [40, `Please enter Father's name`]
    },
    mother_fullname: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter Mother's name`]
    },
    date_registered: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter date registered`]
    },
    current_school: {
        type: String,
        required: true,
        maxlength: [40, `Please enter current school`]
    }
});

mongoose.models = {};

module.exports = mongoose.model.Student || mongoose.model('Student', StudentSchema);