const mongoose = require('mongoose');
const config = require('../config/db');
const User = require('../models/UserModel');

const getUser = async () => {
    try {
        mongoose.connect(config.dbUrl);
        const users = await User.find();
        return users;
    }
    catch (err){
        console.log(err);
    } 
}

const getEmail = async (mail) => {
    try {
        mongoose.connect(config.dbUrl);
        const users = await User.find({ email: mail });
        return users;
    }
    catch (err){
        console.log(err);
    }
  
}

const createUser = async (data) => {
    try {
        mongoose.connect(config.dbUrl);
        const user = new User({ 
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        });

        await user.save();
    }
    catch (err){
        console.log(err);
    }
}

const updateTime = async (mail) => {
    try {
        mongoose.connect(config.dbUrl);
        let filter = { email: mail }
        await User.findOneAndUpdate(filter, { lastLogin: new Date() });
    } catch (error) {
        console.log(err);
    }
}

module.exports = {  getUser, createUser, getEmail, updateTime };

