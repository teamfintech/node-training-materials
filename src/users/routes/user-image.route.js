const express = require('express');
const { requestLogger } = require('../middlewares/logger.middle');

const router = express.Router();

router.use(requestLogger)

router.get('/', (req, res) => {
    res.send("User Image List");
})

module.exports = router;