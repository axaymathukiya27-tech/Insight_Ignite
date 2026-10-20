"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransactionalEmail = sendTransactionalEmail;
const logger_1 = require("../config/logger");
async function sendTransactionalEmail(to, subject, body) {
    // Phase 1 transactional email stub
    logger_1.logger.info(`[EmailService] Sending email to ${to}: ${subject}`);
    return { delivered: true };
}
