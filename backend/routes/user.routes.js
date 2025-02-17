import { Router } from "express";
const userRouter = Router();
import { login, logout, register,addPreferences } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/auth.js";

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.put("/preference", isAuthenticated, addPreferences);
export default userRouter;
