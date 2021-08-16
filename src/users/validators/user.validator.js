const { body } = require('express-validator');

const createUserSchema = [
    body('username', "Invalid username")
        .isLength({min: 3, max: 20})
    ,
    body('password', "Invalid Password")
        .isLength({min: 8})
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
]

module.exports = {
    createUserSchema
}