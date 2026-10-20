"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_1 = require("../utils/response");
const router = (0, express_1.Router)();
router.get("/health", (req, res) => {
    return (0, response_1.sendSuccess)(res, {
        status: "ok",
        service: "insight-ignite-api",
        timestamp: new Date().toISOString(),
        uptimeSeconds: Math.floor(process.uptime()),
        environment: process.env.NODE_ENV || "development",
    });
});
exports.default = router;
