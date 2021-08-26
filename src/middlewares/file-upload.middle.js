const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    }
})

const uploads = multer({
    storage: storage
})


module.exports = {
    singleUpload: (fieldName) => uploads.single(fieldName)
}