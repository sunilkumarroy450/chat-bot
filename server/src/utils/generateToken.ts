import jwt from "jsonwebtoken";

export const generateToken = (
  _id: string,
  email: string,
  expiresIn: string
) => {
  const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
};
