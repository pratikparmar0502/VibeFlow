const cors = require("cors");
const dotenv = require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const connectDB = require("./config/db");

connectDB();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usersRoute");
const postRouter = require("./routes/postRoute");

var app = express();

app.use(
  cors({
    origin: "https://vibe-flow-khol.vercel.app",
    credentials: true,
  }),
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    status: "Fail",
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

module.exports = app;
