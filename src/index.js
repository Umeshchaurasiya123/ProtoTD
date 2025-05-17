require("dotenv").config({
  path: "../.env",
});

const {connectDB}=require("./db/index.js");


connectDB()
.then(()=>{
  const server=application.listen(process.env.PORT || 0, () => {
    const assignPort = server.address().port;
    console.log(`Server is running on port ${assignPort}`);
})
})
.catch((err) => {
  console.error("Error connecting to the database:", err);
  //process.exit(1); // Exit the process with failure
});


/*
console.log(process.env);
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
 


*/