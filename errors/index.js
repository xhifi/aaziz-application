const BadRequestError = require("./badRequest");
const NotFoundError = require("./notFound");
const UnauthorizedError = require("./unauthorized");
const CustomApiError = require("./customApiError");

module.exports = { BadRequestError, NotFoundError, CustomApiError, UnauthorizedError };
