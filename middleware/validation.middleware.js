import Joi from 'joi';


const userRegisterSchema=Joi.object({
    username:Joi.string().alphanum().min(3).max(30).required(),
    email:Joi.string().email().required().lowercase(),
    password:Joi.string().pattern(new RegExp('^(?=.*[A-Z])(?=(?:.*[0-9]){3,}).+$')).min(8).required(),

})

export default userRegisterSchema;