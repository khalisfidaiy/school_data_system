const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MasterAccSchema = new Schema({
    master_id: {
        type: String,
        required: [true, 'Please add Master ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Master ID cannot exceed 10 character']
    },
    master_username: {
        type: String,
        required: true,
        maxlength: [40, `Please enter Master Username`]
    },
    password: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter password`]
    }
});

mongoose.models = {};

module.exports = mongoose.model.Master || mongoose.model('Master', MasterAccSchema);