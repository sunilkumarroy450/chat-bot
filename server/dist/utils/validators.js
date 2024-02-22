import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
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
const userLoginValidator = [
    body("email").trim().isEmail().withMessage("This not a email format"),
    body("password")
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password should contain at least 8 characters"),
];
const userSignUpValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...userLoginValidator,
];
export { validate, userSignUpValidator, userLoginValidator };
//# sourceMappingURL=validators.js.map