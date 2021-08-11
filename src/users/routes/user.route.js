const express = require('express');
const userService = require('../services/user.service');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("User List");
})

router.post('/', (req, res) => {
    const { mobile, password } = req.body;
    const newIUserId = userService.createUser(mobile, password);
    return res.status(201).json({
        id: newIUserId
    })
})

module.exports = router;