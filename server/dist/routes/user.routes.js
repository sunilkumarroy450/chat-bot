import express from "express";
import { get_user, create_user, update_user, delete_user, } from "../controllers/user.controller.js";
const userRouter = express.Router();
userRouter.get("/", get_user);
userRouter.post("/", create_user);
userRouter.patch("/", update_user);
userRouter.delete("/", delete_user);
export default userRouter;
//# sourceMappingURL=user.routes.js.map