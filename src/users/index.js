const userRouter = require('./routes/user.route');
const userImageRouter = require('./routes/user-image.route');


function init(app) {
    app.use('/user', userRouter);
    app.use('/user-image', userImageRouter);
}

module.exports = {
    init
}