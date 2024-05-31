import express from "express";
import UserRouter from "./user.routes";

const router = express.Router();

router.use(UserRouter);

export default router;
