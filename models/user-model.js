const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
    },
    email : {
        type :String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },
    Password:{
        type : String,
        required : true,
    },
    isAdmin:{
        type : Boolean,
        required:false,
        default: false
    }


});

const collectionName = "User";
const User = new mongoose.model(collectionName, userSchema);

module.exports = User;