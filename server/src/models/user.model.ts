import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    chats: { type: mongoose.Schema.Types.ObjectId, ref: "chats", trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { getters: true, virtuals: false },
    toObject: { getters: true, virtuals: false },
  }
);

export default mongoose.model("users", userSchema, "users");
