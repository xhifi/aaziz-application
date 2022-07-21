const UserSchema = require("../../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError, UnauthorizedError } = require("../../errors");

// Register User
const registerOne = async (req, res, next) => {
  const {
    body: { firstName, userName, email, password, role, postCode, city, streetAddress, NINumber },
  } = req;

  const userExists = await UserSchema.findOne({ email });

  const user = await UserSchema.create({
    personalDetails: {
      firstName,
    },
    userName,
    email,
    password,
    role,
  });

  console.log(user);

  if (!user) throw new BadRequestError("User could not be created");
  res.status(200).json(`User ${user.userName} created with id ${user._id}`);
};
// Login User
const login = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Login Controller");
};
// Update User
const updateOne = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Update One Controller");
};

// Delete User
const deleteOne = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Delete One Controller");
};

// User Moderation
const moderation = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Moderation Controller");
};

// Get All Users
const getAll = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Get All Controller");
};

// Register Many Users
const registerMany = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Register Many Controller");
};

// Delete Many Users
const deleteMany = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Delete Many Controller");
};

//Update Many Users
const updateMany = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Update Many Controller");
};

module.exports = { login, registerOne, updateOne, deleteOne, moderation, getAll, registerMany, deleteMany, updateMany };
