const CustomError = require('./custom.error');

class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(errors) {
        super('Request validation error');
        this.errors = errors;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        const formattedErrors = this.errors.map(e => {
            return {message: e.msg, field: e.param};
        })
        return formattedErrors;
    }


}

module.exports = RequestValidationError;