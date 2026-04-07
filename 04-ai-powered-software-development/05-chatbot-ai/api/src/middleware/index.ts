import cors from "cors";
import express, { type Application } from "express";
import { CORS_ORIGIN } from "../config/constants.js";

export const setupMiddleware = (app: Application) => {
  // CORS middleware
  app.use(cors({ origin: CORS_ORIGIN }));

  // Body parsing middleware
  app.use(express.json());
};
