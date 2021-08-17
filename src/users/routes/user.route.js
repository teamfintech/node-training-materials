const express = require('express');
const userService = require('../services/user.service');
const userValidators = require('../validators/user.validator');
const { validationResult, body } = require('express-validator');
const { validates } = require('../middlewares/validation.middle');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');


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


/**
 * Blocking API
 */
router.post('/block', (req, res) => {
    const n = parseInt(req.body.number);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return res.status(200).json({
        sum: sum
    })
});

router.post('/block-file', (req, res) => {
    const filePath = path.join(__dirname, './README.md');
    const content = fs.readFileSync(filePath).toString('utf8');
    return res.status(200).json({
        content: content
    })
})

router.post('/block-crypto', (req, res) => {
    const content = crypto.randomBytes(10000000);
    return res.status(200).json({
        content: content.toString('base64')
    })
})




module.exports = router;