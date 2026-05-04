const postModel = require("../models/postModel");
const mongoose = require("mongoose");

exports.createPost = async (req, res) => {
  try {
    const newPost = await postModel.create({
      ...req.body,
      image: req.file.path,
      user: req.user._id,
    });

    res.status(201).json({
      status: "Success",
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "create fail" + error.message,
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const allPost = await postModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $addFields: {
          totalLikes: { $size: { $ifNull: ["$likes", []] } },
          isLikesByMe: {
            $in: [
              new mongoose.Types.ObjectId(req.user._id),
              { $ifNull: ["$likes", []] },
            ],
          },
        },
      },
      {
        $project: {
          "user.password": 0,
          "user.email": 0,
        },
      },
    ]);
    res.status(200).json({
      status: "Success",
      message: "Post get successfully",
      results: allPost.length,
      data: allPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "get fail" + error.message,
    });
  }
};

exports.getSinglePost = async (req, res) => {
  try {
    const post = await postModel
      .findById(req.params.id)
      .populate("user", "name profilePic");

    if (!post) {
      return res.status(404).json({
        status: "Fail",
        message: "Post not found",
      });
    }

    res.status(200).json({
      status: "Success",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedData = { ...req.body };

    if (req.file) {
      updatedData.image = req.file.path;
    }

    const updatedPost = await postModel.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      updatedData,
      { new: true },
    );

    if (!updatedPost) {
      return res.status(404).json({
        status: "Fail",
        message: "Post not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Post updated",
      data: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await postModel.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        status: "Fail",
        message: "Post not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.likeUnlikePost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);

    if (!post) throw new Error("Post not found!");

    const isLiked = post.likes.includes(req.user._id);

    if (isLiked) {
      await postModel.findByIdAndUpdate(req.params.id, {
        $pull: { likes: req.user._id },
      });
      res.status(200).json({
        status: "Success",
        message: "Post Unliked",
      });
    } else {
      await postModel.findByIdAndUpdate(req.params.id, {
        $addToSet: { likes: req.user._id },
      });
      res.status(200).json({
        status: "Success",
        message: "Post Liked",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};
