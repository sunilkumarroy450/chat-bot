import express from "express";
import {
  get_chat,
  create_chat,
  update_chat,
  delete_chat,
} from "../controllers/chat.controller.js";
const chatRouter = express.Router();

chatRouter.get("/", get_chat);
chatRouter.post("/", create_chat);
chatRouter.patch("/", update_chat);
chatRouter.delete("/", delete_chat);

export default chatRouter;
