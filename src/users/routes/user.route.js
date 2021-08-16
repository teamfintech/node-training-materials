const express = require('express');
const userService = require('../services/user.service');
const userValidators = require('../validators/user.validator');
const { validationResult, body } = require('express-validator');
const { validates } = require('../middlewares/validation.middle');


const router = express.Router();


router.get('/', async (req, res) => {
    const users = await userService.getUser();
    return res.status(200).json({
        message: "Request Successful",
        data: users
    })
})

router.post('/',
    [...userValidators.createUserSchema, validates],
    async (req, res) => {
        const { username, password } = req.body;
        const newIUserId = await userService.createUser(username, password);
        return res.status(201).json({
            id: newIUserId
        })
    }
);





module.exports = router;