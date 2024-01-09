const express = require('express');
const router = express.Router();
const authVerify = require('../utils/verifytoken');
const UserController = require('../controller/UserController');
const AuthController = require('../controller/AuthController');

router.get('/', authVerify, UserController.getUser);
router.post('/register', AuthController.register);
router.post('/signin', AuthController.signin);
router.post('/user', authVerify, UserController.createUser);

module.exports = router;