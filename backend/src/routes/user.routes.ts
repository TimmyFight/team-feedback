//@ts-nocheck

import { Router } from "express";
import { getUsers, getUserDetails } from "../controllers/user.controller";

import authorize from "../middlewares/auth.middleware";

const userRouter = Router();

userRouter.get("/:id", authorize, getUserDetails);

userRouter.get("/", authorize, getUsers);

export default userRouter;
