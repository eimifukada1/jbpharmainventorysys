const httpStatus = require("http-status");
const apiError = require("../utils/apiError");
const { validateToken } = require("../utils/Token.utils"); // Import validateToken

const Authentication = (req, res, next) => {
  try {
    const headers = req.headers["authorization"] || "";

    if (!headers || !headers.startsWith("Bearer ")) {
      throw new apiError(httpStatus.UNAUTHORIZED, "Please login first");
    }

    const auth_token = headers.split(" ")[1];

    if (!auth_token) {
      throw new apiError(
        httpStatus.UNAUTHORIZED,
        "Please provide valid credentials"
      );
    }

    const data = validateToken(auth_token);
    req.user = data.userid;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = Authentication;
