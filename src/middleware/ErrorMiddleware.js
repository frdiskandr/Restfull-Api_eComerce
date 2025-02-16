import ResponseError from "../error/responseError.js";

const ErrorMiddleware = (err, req, res, next) => {
    if (!err) {
        return next().end();
    }

    if (err instanceof ResponseError) {
        res.status(err.status).json({ message: err.message });
    } else if (err) {
        res.status(400).json(err.message);
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default ErrorMiddleware;
