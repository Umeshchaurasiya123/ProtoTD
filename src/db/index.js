const mongoose = require("mongoose");

const { DB_NAME } = require("../constants.js");
const e = require("express");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log(`MONGODB CONNECTION ERROR: ${err.message}`);
    //process.exit(1);
    throw err;
  }
};

module.exports = connectDB;
// default export
