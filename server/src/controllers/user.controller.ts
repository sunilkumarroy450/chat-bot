import { Request, Response, NextFunction } from "express";
import userModel from "../models/user.model.js";
import { hash } from "bcrypt";

export const get_user = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userModel.find();
    return res.status(200).send({ msg: "OK", users });
  } catch (error) {
    console.log(error);
    return res.status(404).send({ error, msg: error.message });
  }
};
export const create_user = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail)
      return res.status(401).send({ msg: "User with same email exist" });
    const hashedPassword = await hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    return res.status(201).send({ msg: "User Created Successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, msg: error.message });
  }
};

export const login_user = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    return res.status(201).send({ msg: "User Created Successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error, msg: error.message });
  }
};
export const update_user = async () => {};
export const delete_user = async () => {};
