const express = require('express');
const userService = require('../services/user.service');
const userValidators = require('../validators/user.validator');
const { validationResult } = require('express-validator');


const router = express.Router();


router.get('/', async (req, res) => {
    const users = await userService.getUser();
    return res.status(200).json({
        message: "Request Successful",
        data: users
    })
})

router.post('/',
    [...userValidators.createUserSchema],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, password } = req.body;
        const newIUserId = await userService.createUser(username, password);
        return res.status(201).json({
            id: newIUserId
        })
    }
);

module.exports = router;