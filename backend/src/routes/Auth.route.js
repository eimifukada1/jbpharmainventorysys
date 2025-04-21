const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth.controller');
const Validation = require('../middlewares/validation');
const { authValidation } = require('../validations/Auth.validation');

router.post('/register', authValidation.registerUser, Validation, AuthController.RegisterUser);

module.exports = router