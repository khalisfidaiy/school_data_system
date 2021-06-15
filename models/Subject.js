const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    subject_id: {
        type: String,
        required: [true, 'Please add Subject ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Subject ID cannot exceed 10 character']
    },
    subject_name: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter Subject's name`]
    }
});

mongoose.models = {};

module.exports = mongoose.model.Subject || mongoose.model('Subject', SubjectSchema);