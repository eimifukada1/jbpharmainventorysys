const AuthService = require("../services/Auth.service");
const httpStatus = require("http-status");
const catchAsync = require("../utils/CatchAsync");
const tokenService = require("../utils/Token.utils");
const CatchAsync = require("../utils/CatchAsync");

const AuthController = {
  registerUser: catchAsync(async (req, res) => {
    const user = await AuthService.RegisterUser(req.body);
    res.status(httpStatus.CREATED).send(user); // Send the user object
  }),

  loginUser: catchAsync(async (req, res) => {
    const user = await AuthService.loginUser(req.body);

    if (!user) {
      return; // AuthService will have already thrown an error
    }

    const token = tokenService.generatoken(user); // Generate token here
    res.status(200).send({ user, token }); // Send user and token
  }),

  getProfile: catchAsync(async (req, res) => {
    const userId = req.user; // Assuming req.user contains the user ID
    const profile = await AuthService.ProfileService(userId);
    res.status(200).send(profile);
  }),
};


module.exports = AuthController;
