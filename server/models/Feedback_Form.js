const mongoose = require("mongoose");

const Feedback_Schema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true
    },
    Feedback:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("Feedback_Form" , Feedback_Schema);