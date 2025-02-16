class ResponseError extends Error {
    constructor(status, message) {
        super(message);
        super.status = status;
    }
}

export default ResponseError;
