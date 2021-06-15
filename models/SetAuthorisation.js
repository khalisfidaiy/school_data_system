const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthoriseSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        maxlength: [40, `Please enter Master Username`]
    },
    username: {
        type: String,
        required: true,
        maxlength: [40, `Please enter Master Username`]
    },
    password: {
        type: String,
        required: true,
        maxlength: [40, `'Please enter password`]
    },
    access_page: {
        type: String,
        required: true,
        maxlength: [40, `Please enter Master Username`]
    }
});

mongoose.models = {};

module.exports = mongoose.model.SetAuthorisation || mongoose.model('SetAuthorisation', AuthoriseSchema);