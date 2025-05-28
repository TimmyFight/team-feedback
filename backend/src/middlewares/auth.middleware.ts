import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: typeof User.prototype;
    }
  }
}

const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, JWT_SECRET as string) as {
      userId: string;
    };

    const user = await User.findById(decoded.userId);

    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user;

    next();
  } catch (error: any) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

export default authorize;
