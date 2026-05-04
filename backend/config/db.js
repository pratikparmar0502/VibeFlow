const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connection success");
  } catch (error) {
    console.log("Mongodb connection error : ", error.message);
  }
};

module.exports = connectDB;
