
const asyncHandler=(fn)=>{
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err)=>next(err));
    };
} 


module.exports = asyncHandler;
// default export

// This utility function wraps an asynchronous function and catches any errors that occur during its execution.
// It allows for cleaner error handling in Express.js routes by passing any errors to the next middleware function.
// Usage:
// const asyncHandler = require('./utils/asyncHandler');    
// app.get('/route', asyncHandler(async (req, res) => {
//     const data = await someAsyncOperation();
//     res.json(data);
// }));
// This way, if `someAsyncOperation` throws an error, it will be caught and passed to the error handling middleware.
// This is particularly useful in Express.js applications to avoid repetitive try-catch blocks in route handlers.
// It ensures that any errors thrown in the asynchronous function are properly handled by the Express error handling middleware.
// This utility function is particularly useful in Express.js applications to avoid repetitive try-catch blocks in route handlers.


//If you call the controller immediately at startup, it will fail because req, res, and next are not defined.
//You must return a function that Express can call later, with the correct arguments.

// important copncept:
//registering a router or Route Registration

