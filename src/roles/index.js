
const roleRouter = require('./routes/role.route');

function init(app) {
    app.use('/role', roleRouter);
}

module.exports = {
    init
}