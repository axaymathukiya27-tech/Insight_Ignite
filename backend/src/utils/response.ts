import { Response } from "express";
import { ApiResponse } from "../types";

export function sendSuccess<T>(res: Response, data: T, message?: string, statusCode = 200) {
  const payload: ApiResponse<T> = {
    success: true,
    data,
    message,
  };
  return res.status(statusCode).json(payload);
}

export function sendError(res: Response, error: string, statusCode = 400) {
  const payload: ApiResponse = {
    success: false,
    error,
  };
  return res.status(statusCode).json(payload);
}
