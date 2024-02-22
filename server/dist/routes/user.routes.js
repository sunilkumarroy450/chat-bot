import express from "express";
import { get_user, create_user, update_user, delete_user, login_user, } from "../controllers/user.controller.js";
import { validate, userSignUpValidator, userLoginValidator, } from "../utils/validators.js";
const userRouter = express.Router();
userRouter.get("/", get_user);
userRouter.post("/", validate(userSignUpValidator), create_user);
userRouter.post("/login", validate(userLoginValidator), login_user);
userRouter.patch("/", update_user);
userRouter.delete("/", delete_user);
export default userRouter;
//# sourceMappingURL=user.routes.js.map