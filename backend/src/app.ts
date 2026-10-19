import express, { Application } from "express";
import cors from "cors";
import { corsOptions } from "./config/cors";
import { requestIdMiddleware } from "./middleware/request-id.middleware";
import { errorMiddleware } from "./middleware/error.middleware";
import apiRouter from "./routes";

export function createApp(): Application {
  const app = express();

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestIdMiddleware);

  // Mount API router
  app.use("/api", apiRouter);

  // Global Error Handler
  app.use(errorMiddleware);

  return app;
}
