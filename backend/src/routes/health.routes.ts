import { Router, Request, Response } from "express";
import { sendSuccess } from "../utils/response";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  return sendSuccess(res, {
    status: "ok",
    service: "insight-ignite-api",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || "development",
  });
});

export default router;
