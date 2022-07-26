const EmployeeModel = require("../../models/employee");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../../errors");

const addEmployee = async (req, res) => {
  const {
    body: { sexualTitle, firstName, middleName, surName, dateOfBirth, NINumber, streetAddress, city, state, postCode },
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

  const employees = await EmployeeModel.find();

  if (employees.length === 0) throw new Error("No Employees in record");

  res.status(StatusCodes.OK).send(employees);
};

const getEmployeeById = async (req, res) => {
  const {
    params: { id },
  } = req;

  const employee = await EmployeeModel.findById(id);
  if (!employee) throw new NotFoundError(`No employee with ${id} found in database`);

  res.status(200).json(employee);
};

// Update Employee
const updateEmployeeById = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const employeeExists = await EmployeeModel.findById(id);
  console.log(employeeExists);

  if (!body) throw new Error("Make changes first to save.");

  const mutated = { ...employeeExists, ...body };
  const updatedEmployee = await EmployeeModel.findByIdAndUpdate(mutated, id);

  res.send(StatusCodes.OK).json(updatedEmployee);
};

// Employee Delete by ID
const deleteEmployeeById = async (req, res) => {
  const {
    params: { id },
  } = req;

  const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);
  if (!deletedEmployee) throw new NotFoundError("No employee with provided ID exists");

  res
    .status(StatusCodes.OK)
    .json(
      `The employee ${deletedEmployee._id}:${deletedEmployee.employeePersonalData.firstName} ${deletedEmployee.employeePersonalData?.middleName} ${deletedEmployee.employeePersonalData?.surName} ${deletedEmployee.employeePersonalData.firstName} has been deleted`
    );
};
const addMultipleEmployees = async (req, res) => {};

module.exports = { addEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById, addMultipleEmployees, getAllEmployees };
