import { type Request, type Response } from "express";

export function loggedInOnlyController(req: Request, res: Response) {
  res
    .status(200)
    .json({ message: "Only logged in people can see this message" });
}

export function adminOnlyController(req: Request, res: Response) {
  res.status(200).json({ message: "Only admin can see this message" });
}

export function customerOnlyController(req: Request, res: Response) {
  res.status(200).json({ message: "Only customer can see this message" });
}
