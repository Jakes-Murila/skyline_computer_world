import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export type AuthRole = "customer" | "staff" | "admin";

export function requireAuth(roles: AuthRole[] = []) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }
    try {
      const payload = jwt.verify(token, env.JWT_SECRET) as { sub: string; role: AuthRole };
      if (roles.length > 0 && !roles.includes(payload.role)) {
        return res.status(403).json({ message: "Insufficient permissions" });
      }
      res.locals.user = payload;
      next();
    } catch {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
}
