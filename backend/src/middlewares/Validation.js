const { validationResult } = require("express-validator");
const httpStatus = require("http-status"); // 
const apiError = require("../utils/apiError");

const Validation = (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new apiError(httpStatus.
        BAD_REQUEST, result.array()[0].msg);
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = Validation;