

class CustomError extends Error {
    statusCode = null;

    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    serializeErrors() {
        throw new Error("Not implemented yet")
    }
}

module.exports = CustomError;