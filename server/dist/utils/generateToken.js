import jwt from "jsonwebtoken";
export const generateToken = (_id, email, expiresIn) => {
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
//# sourceMappingURL=generateToken.js.map