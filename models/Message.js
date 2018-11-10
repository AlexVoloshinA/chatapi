const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    author: {
        type: String,
        default: 'unauthenticated user'
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validator.isEmail, 'Invalid Email Eddress'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    text: {
        type: String,
        required: true,
        //validate: [validator.isEmpty, 'Please provide some text message'],
        maxlength: 100,
        trim: true,
        //minlength: 1

    },
    createDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date,
        default: Date.now
    }

});



module.exports = mongoose.model("Message", messageSchema);