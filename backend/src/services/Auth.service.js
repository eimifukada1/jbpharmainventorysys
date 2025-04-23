const httpStatus = require("http-status");
const { UserModel, ProfileModel } = require("../models");
const ApiError = require("../utils/apiError");
const bcrypt = require("bcryptjs");

class AuthService {
  static async RegisterUser(body) {
    const { email, password, name } = body;

    const checkExist = await UserModel.findOne({ email });
    if (checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Already Exists");
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      name,
    });
    await ProfileModel.create({
      user: newUser._id,
    });

    return {
      msg: "User Registered Successfully",
      user: newUser, // Return the user object
    };
  }

  static async loginUser(body) {
    const { email, password } = body;

    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Not Found");
      return null; // Indicate user not found
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Credentials");
      return null; // Indicate invalid credentials
    }

    return user; // Return the user object upon successful login
  
} 

  static async ProfileService(user) {
        const checkExist = await UserModel.findById(user).select("name email")

    if (!checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Not Found");
      return
    }
  return {
    msg:"Data fetched",
    user:checkExist
  };
}}


module.exports = AuthService;
