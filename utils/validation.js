const Joi = require('joi');

const registerValidator = (data) => {
    //console.log(data);
    try {
        const schema = Joi.object({
            firstName: Joi.string().min(3).required(),
            lastName: Joi.string().min(3).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string()
            .min(8)
            .max(25)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
            'password')
            .required(),
        });
    
        return schema.validate(data);
    } catch (error) {
        console.log(error);
    }
}

const singinValidator = (data) => {
    //console.log(data);
    try {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string()
            .min(8)
            .max(25)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
            'password')
            .required(),
        });
    
        return schema.validate(data);
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {registerValidator,singinValidator}
