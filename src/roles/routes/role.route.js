const express = require('express');
const roleService = require('../services/role.service');


const router = express.Router();


router.get('/', async (req, res) => {
    const roles = await roleService.getRoles();
    return res.status(200).json({
        message: "Request Successful",
        data: roles
    })
})

module.exports = router;