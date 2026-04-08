import { type Request, type Response } from "express";

export function publicController(req: Request, res: Response) {
  res.status(200).json({ message: "Everybody can see this message" });
}
