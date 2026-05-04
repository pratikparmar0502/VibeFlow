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

// pratik eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWVjNDk0ZDM4NmI1MmM3YTU5N2YwODIiLCJpYXQiOjE3NzcwOTYyNDZ9.Ms3OMUlrQq1KIEBLccmBb4uyJR7-OEnBCOohZDyOrKI

// demo eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWVjNDhiMjM4NmI1MmM3YTU5N2YwODEiLCJpYXQiOjE3NzcwOTMxNjJ9.xNtpaC7pHP0pyDUxxzSvchPWq5ZF1as-3DPo6qpU3DE
