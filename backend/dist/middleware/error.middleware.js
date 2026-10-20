"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const logger_1 = require("../config/logger");
function errorMiddleware(err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    const statusCode = err.statusCode || 500;
    const errorCode = err.code || "INTERNAL_ERROR";
    const requestId = req.headers["x-request-id"] || "unknown";
    logger_1.logger.error(`Error on ${req.method} ${req.path} [${requestId}]: ${err.message}`, err);
    res.status(statusCode).json({
        error: {
            code: errorCode,
            message: err.message || "An unexpected internal error occurred",
            requestId,
        },
    });
}
