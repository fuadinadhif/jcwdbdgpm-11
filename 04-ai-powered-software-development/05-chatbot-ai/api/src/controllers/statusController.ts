import { type Request, type Response } from "express";

export const getStatus = (req: Request, res: Response) => {
  res.status(200).json({
    message: "API is running!",
    uptime: process.uptime(),
  });
};
