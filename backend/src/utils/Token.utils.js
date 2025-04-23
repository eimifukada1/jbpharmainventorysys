const jwt = require("jsonwebtoken");
const { PUBLIC_DATA } = require("../../constant");

exports.generatoken = (user, expire = "1d") => {
  const token = jwt.sign({ userid: user._id }, PUBLIC_DATA.jwt_auth, {
    expiresIn: expire,
  });
  return token;
};

exports.validateToken = (token) => {
  const decodedToken = jwt.verify(token, PUBLIC_DATA.jwt_auth);
  return decodedToken;
};
