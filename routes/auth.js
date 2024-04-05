import express from "express";
import AuthController from "../controllers/auth.js";

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

export default authRouter;