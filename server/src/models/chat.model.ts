import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
    toJSON: { getters: true, virtuals: false },
    toObject: { getters: true, virtuals: false },
  }
);
