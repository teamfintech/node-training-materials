const { body, check } = require('express-validator');

const createUserSchema = [
    body('username', "Invalid username")
        .isLength({min: 3, max: 20})
    ,
    body('password', "Invalid Password")
        .isLength({min: 8})
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
]

const addressSchema = [
    body('data', "Invlaid Data")
        .isArray({min: 1})
    ,
    body('data.*.postalCode', "Please provide a valid postal code")
        .isInt()
    ,
    body('data.*.road', "Invalid Road")
        .isLength({min: 3})
]

module.exports = {
    createUserSchema,
    addressSchema
}