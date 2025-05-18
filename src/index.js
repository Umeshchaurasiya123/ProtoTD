require("dotenv").config({
  path: "./.env",
});
const app = require("./app.js");

const connectDB = require("./db/index.js");

connectDB()
  .then(() => {
    const server = app.listen(process.env.PORT || 0, () => {
      const assignPort = server.address().port;
      console.log(`Server is running on port: ${assignPort}`);
    });
  })
  .catch((err) => {
    //console.error("Error connecting to the Database:", err);
    process.exit(1); // Exit the process with failure
  });
