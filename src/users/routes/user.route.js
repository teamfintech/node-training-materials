const express = require('express');
const userService = require('../services/user.service');
const router = express.Router();


router.get('/', async (req, res) => {
    const users = await userService.getUser();
    return res.status(200).json({
        message: "Request Successful",
        data: users
    })
})

router.post('/', (req, res) => {
    const { mobile, password } = req.body;
    const newIUserId = userService.createUser(mobile, password);
    return res.status(201).json({
        id: newIUserId
    })
})

module.exports = router;