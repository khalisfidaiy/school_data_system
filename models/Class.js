const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new mongoose.Schema({
    class_id: {
        type: String,
        required: [true, 'Please add Class ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Class ID cannot exceed 10 characters']
    },
    class_name: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter Class's name`]
    },
    class_year: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter year`]
    },
    assign_teacher_id: {
        type: String,
        required: [true, `Please enter Assigned Teacher's ID`],
        maxlength: [10, `Assign Teacher's ID cannot exceed 10 character`]
    }
});

mongoose.models = {};

module.exports = mongoose.model.Class || mongoose.model('Class', ClassSchema);