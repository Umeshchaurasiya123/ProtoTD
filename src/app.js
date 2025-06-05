const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

//to pass data from client to server through req.body
//for JSON data
app.use(express.json({limit: '10mb'}));

//for form data pass through req.body
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

//to serve static files like images, css, js, etc.
//public folder is the default folder to serve static files
app.use(express.static('public'));



// for stroing and parsing cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Importing routes



module.exports = app;
//default export


