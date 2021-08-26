const express = require('express');
const { requestLogger } = require('../middlewares/logger.middle');
const { singleUpload } = require('../../middlewares/file-upload.middle');
const fs = require('fs');
const path = require('path');
const { createUserImage, getUserImage } = require('../services/user-image.service');
const fsAsync = fs.promises;

const router = express.Router();

router.use(requestLogger)

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const result = await getUserImage(id);
    if(result) result.data = result.data.toString('base64');
    return res.status(200).json({
        data: result
    })
})


router.post('/', [singleUpload('faceImage')], async (req, res, next) => {
    console.log(req.file);
    console.log(path.resolve(req.file.path))
    const buff = await fsAsync.readFile(path.resolve(req.file.path));
    const id = await createUserImage(buff, req.file.mimetype);
    return res.status(201).json({
        id: id
    })
})

module.exports = router;