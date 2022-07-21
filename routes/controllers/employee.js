const EmployeeModel = require("../../models/employee");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../../errors");

const addEmployee = async (req, res) => {
  const {
    body: {
      sexualTitle,
      firstName,
      middleName,
      surName,
      dateOfBirth,
      NINumber,
      addressOfEmployee: { streetAddress, city, state, postCode },
    },
  } = req;
  const body = req.body;

  if (!body) {
    throw new BadRequestError("No body provided");
  }
  // Find employee and if it already exists, throw error
  const employeeExists = await EmployeeModel.findOne({
    employeePersonalData: { NINumber },
  });

  if (employeeExists) {
    // throw new BadRequestError(`Employee already exists`);
    res.status(StatusCodes.OK).json({ employeeExists });
  }
  // Create an employee and save it in database
  const newEmployee = await EmployeeModel.create({
    employeePersonalData: {
      sexualTitle,
      firstName,
      middleName,
      surName,
      dateOfBirth,
      NINumber,
      addressOfEmployee: {
        streetAddress,
        city,
        state,
        postCode,
      },
    },
  });

  // If an error occurs and employee cant be created, throw error
  if (!newEmployee) {
    throw new BadRequestError("Employee could not be created");
  }

  // If employee is created, return the ID of the employee
  res.status(StatusCodes.OK).send(`Employee Created with ID: ${newEmployee._id}`);
};

const getAllEmployees = async (req, res) => {
  const {
    query: { page, limit },
  } = req;

  console.log(page, limit);

  const employees = await EmployeeModel.find();
  res.status(StatusCodes.OK).send(employees);
};

const getEmployeeById = async (req, res) => {};
const updateEmployeeById = async (req, res) => {};
const deleteEmployeeById = async (req, res) => {};
const addMultipleEmployees = async (req, res) => {};

module.exports = { addEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById, addMultipleEmployees, getAllEmployees };
