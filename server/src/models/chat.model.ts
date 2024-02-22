import mongoose from "mongoose";
import { randomUUID } from "crypto";

const chatSchema = new mongoose.Schema(
  {
    id: { type: String, default: randomUUID() },
    role: { type: String, required: true, trim: true },
    content: { type: String, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { getters: true, virtuals: false },
    toObject: { getters: true, virtuals: false },
  }
);

export default mongoose.model("chats", chatSchema, "chats");
