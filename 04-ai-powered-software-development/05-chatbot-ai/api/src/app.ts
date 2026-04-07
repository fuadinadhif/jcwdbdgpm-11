import express, { type Application } from "express";
import { setupMiddleware } from "./middleware/index.js";
import apiRoutes from "./routes/index.js";

const createApp = (): Application => {
  const app = express();

  // Setup middleware
  setupMiddleware(app);

  // Setup API routes
  app.use("/api", apiRoutes);

  return app;
};

export default createApp;
