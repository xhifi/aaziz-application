const businessModel = require("../../models/business");
const { BadRequestError, NotFoundError, CustomApiError, UnauthorizedError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");

// Get all companies
const getAll = async (req, res, next) => {
  const businesses = await businessModel.find();
  if (businesses.length === 0) throw new NotFoundError("No businesses found");
  res.status(StatusCodes.OK).json(businesses);
};

// Get One Company
const getOne = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  console.log(id);

  const businessById = (await businessModel.findById(id)) || (await businessModel.find({ name: id }));
  if (!businessById) throw new Error("Business not found");

  res.status(StatusCodes.OK).send(businessById);
};

// Create one company
const createOne = async (req, res, next) => {
  const {
    body: {
      name,
      address: { streetAddress, city, state, postCode },
      email,
      phoneNumber,
      registrationNumber,
      employees,
    },
  } = req;

  const businessExists = await businessModel.findOne({ registrationNumber, name });
  console.log(businessExists);
  if (businessExists) throw new BadRequestError("Business already exists", StatusCodes.BAD_REQUEST);
  const business = await businessModel.create({
    name,
    address: {
      streetAddress,
      city,
      state,
      postCode,
    },
    email,
    phoneNumber,
    registrationNumber,
  });

  if (!business) throw new BadRequestError("Business could not be created");

  res.status(StatusCodes.CREATED).json({ business, msg: "Business created successfully" });
};

// Update one company
const updateOne = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const business = await businessModel.findById(id);
  if (!business) throw new NotFoundError("Business not found");

  const updatedBusiness = await businessModel.findByIdAndUpdate(id, body, { new: true });
  res.status(StatusCodes.ACCEPTED).send("Business Updated");
};

// Delete one company
const deleteOne = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const deletedBusiness = await businessModel.findByIdAndDelete(id);
  if (!deletedBusiness) throw new NotFoundError("Business not found");

  res.status(StatusCodes.OK).send(`Your business with ID ${deletedBusiness._id} has been deleted`);
};

// Create Many Companies
const createMany = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Create Many Controller");
};

// Update Many Companies
const updateMany = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Update Many Controller");
};

// Delete Many Companies
const deleteMany = async (req, res, next) => {
  res.status(StatusCodes.ACCEPTED).send("Delete Many Controller");
};

module.exports = { getAll, createOne, updateOne, deleteOne, createMany, updateMany, deleteMany, getOne };
