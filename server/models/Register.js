const mongoose = require("mongoose");

const Register_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true, // prevents duplicate emails
        lowercase: true // auto converts to lowercase
    },
    Phoneno: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/ // only 10-digit phone numbers
    },
    age: {
        type: Number,
        min: 1,
        max: 120,
        required: true
    },
    Password :{
           type: String,
            required: true
    }
});

module.exports = mongoose.model("Register", Register_schema);
