require('dotenv').config()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidator, singinValidator } = require('../utils/validation');

const UserService = require('../services/UserService');

const register = async (req, res) => {
    try {
        const { error } = registerValidator(req.body);

        if (error) res.json({
            message: error.details[0].message
        });

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword,
        }

        const uEmail = await UserService.getEmail(user.email);
        if (uEmail.length > 0) {
            res.status(400).json({
                message: 'email already exists'
            });
        } else {
            await UserService.createUser(user);
            res.status(200).json({
                message: 'success',
                data: 'create user success user'
            });

        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'error register', error: err});
    }


};

const signin = async (req, res) => {

    try {
        const { error } = singinValidator(req.body);
        if (error) res.json({
            message: error.details[0].message
        });

        let { email, password } = req.body;

        //console.log('email, password : ', email, password);

        let findByEmail = await UserService.getEmail(email)

        if (findByEmail.length > 0) {

            let validPassWord = await bcrypt.compare(password, findByEmail[0].password);

            if (!validPassWord) {
                res.status(400).json({ message: 'Invalid Password' });
            } else {

                const token = jwt.sign({ 
                    id: findByEmail[0].id,   
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: { email: findByEmail[0].email, userId :  findByEmail[0].id }
                }, process.env.TOKEN_SECRET);

                await UserService.updateTime(findByEmail[0].email);

                res.header('token', token).status(200).json({
                    message: 'success',
                    token: token,
                    data: {
                        id : findByEmail[0].id, 
                        firstName: findByEmail[0].firstName, 
                        lastName:  findByEmail[0].lastName,
                        email:  findByEmail[0].email
                    }
                });

            }

        } else {
            res.status(400).json({ message: 'not found user' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'error singin', error: err});
    }

}


module.exports = { register, signin }; 