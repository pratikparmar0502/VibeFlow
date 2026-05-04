var express = require("express");
var router = express.Router();

const {
  register,
  login,
  getUserProfile,
  updateProfile,
  deleteProfile,
  searchUser,
  followUnfollowUser,
} = require("../controllers/userController");

const { auth } = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/getUserProfile/:id", auth, getUserProfile);
router.get("/search", auth, searchUser);
router.patch("/updateProfile", auth, updateProfile);
router.delete("/deleteProfile", auth, deleteProfile);
router.patch("/follow/:id", auth, followUnfollowUser);

module.exports = router;
