const express = require('express');
const userService = require('../services/user.service');
const userValidators = require('../validators/user.validator');
const { validationResult, body } = require('express-validator');
const { validates } = require('../middlewares/validation.middle');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { default: axios } = require('axios');


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
        console.log("In Create User.....")
        const { username, password } = req.body;
        const newIUserId = await userService.createUser(username, password);
        return res.status(201).json({
            id: newIUserId
        })
    }
);


router.post('/address', [...userValidators.addressSchema, validates], (req, res, next) => {
    setTimeout(() => {
        try {
            throw new Error("Some Error");
        }
        catch(ex) {
            next(ex);
        }
    }, 2000);
})


/**
 * Blocking API
 * https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
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


/**
 * Unhandled Promise Rejection Error
 */
router.get('/promise-rejection', (req, res) => {
    try {
        const filePath = path.join(__dirname, './README.md');
        fs.readFile(filePath, async (err, data) => {
            const result = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: "Node Training",
                body: data.toString('utf8'),
                userId: 'nahid'
            })
            return res.status(201).json(result.data)
        })
    }
    catch (ex) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
})


/**
 * Using Streams for sending large files
 * https://www.tutorialspoint.com/nodejs/nodejs_streams.htm
 * https://betterprogramming.pub/video-stream-with-node-js-and-html5-320b3191a6b6
 * https://medium.com/dev-bits/writing-memory-efficient-software-applications-in-node-js-5575f646b67f
 */
router.get('/bigfile', (req, res) => {
    const filePath = path.join(__dirname, './README.md');
    const readStream = fs.createReadStream(filePath);
    res.setHeader('content-type', 'text/plain');
    res.setHeader("Content-Disposition", 'attachment; filename="README.md"')
    readStream.pipe(res);
    readStream.on('end', () => {
        console.log("[INFO] Unpipe and Send")
        readStream.unpipe(res);
        return res.status(200).send();
    })
})

module.exports = router;