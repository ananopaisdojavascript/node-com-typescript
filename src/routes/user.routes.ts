import express from "express";
import { registerUserFactory } from "../useCases/RegisterUserFactory";

const router = express.Router();

const userController = registerUserFactory();

router.post("/users", userController.handle);

export default router;
