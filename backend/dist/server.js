"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./config/env");
const logger_1 = require("./config/logger");
const app = (0, app_1.createApp)();
const server = app.listen(env_1.env.port, () => {
    logger_1.logger.info(`Insight Ignite API server running on port ${env_1.env.port} [${env_1.env.nodeEnv}]`);
});
// Graceful shutdown handling
process.on("SIGTERM", () => {
    logger_1.logger.info("SIGTERM signal received: closing HTTP server");
    server.close(() => {
        logger_1.logger.info("HTTP server closed");
        process.exit(0);
    });
});
process.on("SIGINT", () => {
    logger_1.logger.info("SIGINT signal received: closing HTTP server");
    server.close(() => {
        logger_1.logger.info("HTTP server closed");
        process.exit(0);
    });
});
