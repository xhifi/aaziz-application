const { StatusCodes } = require("http-status-codes");
const CustomApiError = require("./CustomApiError");

class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message);
    this.StatusCode = Status.UNAUTHORIZED;
  }
}
module.exports = BadRequestError;
