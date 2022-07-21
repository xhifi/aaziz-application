const StatusCodes = require("http-status-codes");
const CustomApiError = require("./CustomApiError.js");

class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
