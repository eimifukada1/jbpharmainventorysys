const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/Auth.controller");
const { authValidation } = require("../validations/Auth.validation");
const Validation = require("../middlewares/validation");
const Authentication = require("../middlewares/Authentication");

router.post("/register",authValidation.registerUser,Validation,AuthController.registerUser);
router.post("/login",authValidation.loginUser,Validation,AuthController.loginUser);
router.get("/profile", Authentication, AuthController.getProfile);


module.exports = router;
