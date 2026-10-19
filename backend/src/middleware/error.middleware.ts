import { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger";

export interface ApiError extends Error {
  statusCode?: number;
  code?: string;
  details?: unknown;
}

export function errorMiddleware(
  err: ApiError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  const statusCode = err.statusCode || 500;
  const errorCode = err.code || "INTERNAL_ERROR";
  const requestId = (req.headers["x-request-id"] as string) || "unknown";

  logger.error(`Error on ${req.method} ${req.path} [${requestId}]: ${err.message}`, err);

  res.status(statusCode).json({
    error: {
      code: errorCode,
      message: err.message || "An unexpected internal error occurred",
      requestId,
    },
  });
}
