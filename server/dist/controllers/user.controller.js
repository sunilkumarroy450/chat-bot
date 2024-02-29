import userModel from "../models/user.model.js";
import { hash, compare } from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
import { COOKIE_NAME } from "../utils/constant.js";
export const get_user = async (req, res, next) => {
    try {
        const users = await userModel.find();
        return res.status(200).send({ msg: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(404).send({ error, msg: error.message });
    }
};
export const create_user = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingEmail = await userModel.findOne({ email });
        if (existingEmail)
            return res.status(401).send({ msg: "User with same email exist" });
        const hashedPassword = await hash(password, 10);
        const user = new userModel({ name, email, password: hashedPassword });
        await user.save();
        //store cookie and generate  token
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        const token = generateToken(user._id.toString(), user.email, "7days");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        return res.status(201).send({ msg: "User Created Successfully", user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ error, msg: error.message });
    }
};
export const login_user = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user)
            return res.status(401).send({ msg: "User not registered" });
        //compare password
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect)
            return res.status(403).send({ msg: "Incorrect Password" });
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        const token = generateToken(user._id.toString(), user.email, "7days");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        return res.status(200).send({ msg: "User login successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ error, msg: error.message });
    }
};
export const update_user = async () => { };
export const delete_user = async () => { };
//# sourceMappingURL=user.controller.js.map