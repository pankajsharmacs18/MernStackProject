const mongoose = require('mongoose');
const e = require("express");
const LocalMongoURI ="mongodb://127.0.0.1:27017/mern_admin";
//mongoose.connect(URI);
const CollectionName ="mernPro";
const DBPassword = "pankaj";
const MONGODB_URL=`mongodb+srv://pankajsharma:${DBPassword}@pankajsharma.mvicpk2.mongodb.net/${CollectionName}?retryWrites=true&w=majority&appName=pankajsharma`;


const connectDB = async () =>{
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.error("error connecting to MongoDB",err);
        process.exit(1);
    }
}

module.exports = connectDB();