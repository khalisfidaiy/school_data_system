const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
    admin_id: {
        type: String,
        required: [true, 'Please add Administrator ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Administrator ID cannot exceed 10 character']
    },
    admin_name: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter Administrator's name`]
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

module.exports = mongoose.model.Admin || mongoose.model('Admin', AdminSchema);