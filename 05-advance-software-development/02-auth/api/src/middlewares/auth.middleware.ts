import { type Request, type Response, type NextFunction } from "express";
import { Role } from "../generated/prisma/enums";

import jwt from "jsonwebtoken";

import { CustomJwtPayload } from "../types/express.type";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  // 1. Check request headear auth ada atau tidak
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Unauthenticated" });

  // 2. Check apakan token ada dan valid
  const accessToken = authHeader.split(" ")[1];

  if (!accessToken) return res.status(404).json({ message: "Token not found" });

  const payload = jwt.verify(
    accessToken,
    process.env.JWT_SECRET_KEY as string,
  ) as CustomJwtPayload;

  req.user = payload;

  next();
}

export function roleGuard(role: Role) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (user?.role !== role)
      return res.status(403).json({ message: "Forbidden" });

    next();
  };
}
