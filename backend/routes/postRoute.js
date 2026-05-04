const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");
const {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  likeUnlikePost,
} = require("../controllers/postController");
const upload = require("../config/cloudinary");

router.post("/createPost", auth, upload.single("image"), createPost);
router.get("/getAllPost", auth, getAllPost);
router.get("/getSinglePost/:id", auth, getSinglePost);
router.patch("/updatePost/:id", auth, updatePost);
router.delete("/deletePost/:id", auth, deletePost);
router.patch("/like/:id", auth, likeUnlikePost);

module.exports = router;
