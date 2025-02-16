import winston from "winston";

const Logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    handleExceptions: true,
    handleRejections: true,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", level: "error" })
    ]
})

export default Logger;