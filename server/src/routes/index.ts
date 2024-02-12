import express from "express";
const appRouter = express.Router();
import userRouter from "./user.routes.js";
import chatRouter from "./chat.routes.js";

appRouter.use("/user", userRouter);
appRouter.use("/chat", chatRouter);

export default appRouter;
