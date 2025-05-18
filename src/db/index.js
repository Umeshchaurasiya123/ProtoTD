const mongoose = require("mongoose");

const { DB_NAME } = require("../constants.js");

const DatabaseError = require("../utils/DatabaseError.js");

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
    //process.exit(0);
    //throw err;
    throw new DatabaseError(500, "Database Connection issue", err.message);
  }
};

module.exports = connectDB;
// default export
