class DatabaseError extends Error {
  constructor(statusCode, message = "Database Error", error = []) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = Error.statusCode;
    //this.statusCode = statusCode;
    this.name = "DatabaseError";
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = DatabaseError;
// default export
