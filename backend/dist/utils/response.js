"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccess = sendSuccess;
exports.sendError = sendError;
function sendSuccess(res, data, message, statusCode = 200) {
    const payload = {
        success: true,
        data,
        message,
    };
    return res.status(statusCode).json(payload);
}
function sendError(res, error, statusCode = 400) {
    const payload = {
        success: false,
        error,
    };
    return res.status(statusCode).json(payload);
}
