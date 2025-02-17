import jwt from "jsonwebtoken";
const isAuthenticated = async function (req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({
        message: "Please login",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid Token",
        success: false,
      });
    }
    req.user = decode.UserId;
    next();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export default isAuthenticated;
