const { body } = require("express-validator");

module.exports = {
  authValidation: {
    registerUser: [
      body("name").notEmpty().withMessage("Name cannot be empty"),
      body("email").notEmpty().withMessage("Email must be valid").isEmail(),
      body("password")
        .notEmpty()
        .withMessage("Password cannot be empty")
        .isLength({ min: 6 })
        .withMessage("Password must include at least minimum of 6 characters"),
      body("confirmPassword").notEmpty().withMessage("Password is required"),
    ],
    loginUser: [
      body("name").notEmpty().withMessage("Name cannot be empty"),
      body("email").notEmpty().withMessage("Email must be valid").isEmail(),
      body("password")
        .notEmpty()
        .withMessage("Password cannot be empty")
        .isLength({ min: 6 })
        .withMessage("Password must include at least minimum of 6 characters"),
      body("confirmPassword").notEmpty().withMessage("Password is required"),
    ],
  },
};
