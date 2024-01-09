require('dotenv').config()
const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try {
        if(!req.header("Authorization")){
            return res.status(401).json('Access Denied');
        } 
        const token = req.header("authorization").split(' ');
        const verifyToken = jwt.verify(token[1], process.env.TOKEN_SECRET);
        req.user = verifyToken;
        next();
    } catch (error) {
        return res.status(400).json('Invalid Token');
    }
}
