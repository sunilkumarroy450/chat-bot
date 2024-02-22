import { body, ValidationChain, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (const validation of validations) {
      await validation.run(req);
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};

const userLoginValidator: ValidationChain[] = [
  body("email").trim().isEmail().withMessage("This not a email format"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password should contain at least 8 characters"),
];

const userSignUpValidator: ValidationChain[] = [
  body("name").notEmpty().withMessage("Name is required"),
  ...userLoginValidator,
];

export { validate, userSignUpValidator, userLoginValidator };
