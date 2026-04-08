import { Role } from "../generated/prisma/enums";

import { type JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  id: number;
  email: string;
  role: Role;
}

declare global {
  namespace Express {
    interface Request {
      user?: CustomJwtPayload;
    }
  }
}
