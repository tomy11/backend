const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName : {type : String, required: true},
    lastName : {type : String, required: true},
    email : {type : String, required: true},
    password : {type : String, required: true},
    createdAt : {type : Date, default : Date.now},
    lastLogin : {type : Date, default : Date.now}},
    { 
        collection : 'users'
    }
);
module.exports = mongoose.model('User', UserSchema);