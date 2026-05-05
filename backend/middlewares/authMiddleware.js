const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new Error("Attach token!");

    const tokenVerfiy = jwt.verify(token, process.env.JWT_SECRET);

    req.user = tokenVerfiy;
    next();
  } catch (error) {
    console.log("Error: ", error);
    res.status(401).json({
      status: "Fail",
      message: "Authentication failed: " + error.message,
    });
  }
};
