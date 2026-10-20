"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cors_2 = require("./config/cors");
const request_id_middleware_1 = require("./middleware/request-id.middleware");
const error_middleware_1 = require("./middleware/error.middleware");
const routes_1 = __importDefault(require("./routes"));
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)(cors_2.corsOptions));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(request_id_middleware_1.requestIdMiddleware);
    // Mount API router
    app.use("/api", routes_1.default);
    // Global Error Handler
    app.use(error_middleware_1.errorMiddleware);
    return app;
}
