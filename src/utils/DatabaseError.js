class DatabaseError extends Error {
  constructor(statusCode, message = "Database  Connection issue",errorResponse) {
    super(message);
    this.statusCode = statusCode;
    this.name = "DatabaseError";
    this.message = message;
    this.success = false;
    this.errorResponse = errorResponse;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = DatabaseError;
// default export
