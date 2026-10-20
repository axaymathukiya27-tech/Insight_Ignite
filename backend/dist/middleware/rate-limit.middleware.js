"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitMiddleware = rateLimitMiddleware;
/**
 * Lightweight in-memory rate limiter middleware for Phase 1.
 */
const requestCounts = new Map();
function rateLimitMiddleware(limit = 100, windowMs = 60000) {
    return (req, res, next) => {
        const ip = req.ip || req.socket.remoteAddress || "unknown";
        const now = Date.now();
        const clientRecord = requestCounts.get(ip);
        if (!clientRecord || now > clientRecord.resetTime) {
            requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
            return next();
        }
        if (clientRecord.count >= limit) {
            return res.status(429).json({
                error: "Too Many Requests",
                message: "Rate limit exceeded. Please try again later.",
            });
        }
        clientRecord.count++;
        next();
    };
}
