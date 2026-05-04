const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

exports.register = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = await userModel.create({
      ...req.body,
      password: hashPassword,
    });
    res.status(201).json({
      status: "Success",
      message: "Registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const emailVerfiy = await userModel.findOne({ email: req.body.email });
    if (!emailVerfiy) throw new Error("Invalid email!");

    const passVerfiy = await bcrypt.compare(
      req.body.password,
      emailVerfiy.password,
    );
    if (!passVerfiy) throw new Error("Invalid password!");

    const token = await jwt.sign(
      { _id: emailVerfiy._id },
      process.env.JWT_SECRET,
      //   { expiresIn: "24h" },
    );

    res.status(200).json({
      status: "Success",
      message: "Login successfully",
      data: emailVerfiy,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await userModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "user",
          as: "myPosts",
        },
      },
      {
        $addFields: {
          followersCount: { $size: { $ifNull: ["$followers", []] } },
          followingCount: { $size: { $ifNull: ["$following", []] } },
          totalPost: { $size: "$myPosts" },
        },
      },
      {
        $project: {
          password: 0,
          email: 0,
        },
      },
    ]);
    if (!user || user.length === 0) throw new Error("User not found!");

    res.status(200).json({
      status: "Success",
      message: "Profile fetched successfully",
      data: user[0],
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    if (!user) throw new Error("User not found!");

    res.status(200).json({
      status: "Success",
      message: "Profile updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.user._id);
    if (!user) throw new Error("User not found!");

    res.status(200).json({
      status: "Success",
      message: "Profile deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.searchUser = async (req, res) => {
  try {
    const users = await userModel.find({
      name: { $regex: req.query.name, $options: "i" },
    });
    if (!users) throw new Error("Not found!");
    res.status(200).json({
      status: "Success",
      message: "Profile search successfully",
      results: users.length + " users found",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.followUnfollowUser = async (req, res) => {
  try {
    const targetUserId = req.params.id;
    const currentUserId = req.user._id;

    if (targetUserId === currentUserId.toString())
      throw new Error("You cannot follow yourself!");

    const targetUser = await userModel.findById(targetUserId);
    if (!targetUser) throw new Error("User not found!");

    const isFollowing = targetUser.followers.includes(currentUserId);

    if (isFollowing) {
      await userModel.findByIdAndUpdate(targetUserId, {
        $pull: { followers: currentUserId },
      });
      await userModel.findByIdAndUpdate(currentUserId, {
        $pull: { following: targetUserId },
      });

      res.status(200).json({
        status: "Success",
        message: "Unfollowed successfully",
      });
    } else {
      await userModel.findByIdAndUpdate(targetUserId, {
        $addToSet: { followers: currentUserId },
      });
      await userModel.findByIdAndUpdate(currentUserId, {
        $addToSet: { following: targetUserId },
      });

      res.status(200).json({
        status: "Success",
        message: "Followed successfully",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};
