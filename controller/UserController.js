const express = require('express');
const Service = require('../services/UserService');

const getUser = async (req, res) => {
     const cat = await Service.getUser();
     res.status(200).json({ 
          message: 'get user success',
          data: cat
     });
};

const createUser = async (req, res) => {
     const user = await Service.createUser();
     res.send(JSON.stringify({ 
          message: 'create user success',
          data: user
     }));
}

module.exports = { getUser, createUser }; 