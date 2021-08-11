

const requestLogger = (req, res, next) => {
    console.log(`${req.originalUrl} hit at ${new Date().toLocaleString()}`);
    next();
}

module.exports = {
    requestLogger
}