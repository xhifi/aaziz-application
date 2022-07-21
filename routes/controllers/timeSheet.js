const TimeSheetModel = require("../../models/timeSheet");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../../errors");

const addTimeSheetRecord = async (req, res) => {
  const {
    body: { timeSheet },
  } = req;
  if (!timeSheet) throw new BadRequestError("timeSheet can't be empty");

  const timeSheetExists = await TimeSheetModel.findOne({ timeSheet });
  if (timeSheetExists) throw new BadRequestError(`Time Sheet Already Exists with id ${timeSheetExists._id}`);

  const newTimeSheet = await TimeSheetModel.create({ timeSheet });
  newTimeSheet && res.status(StatusCodes.CREATED).send({ newTimeSheet, msg: "Time Sheet added successfully" });
};

const addTimeSheetRecordById = async (req, res) => {
  res.status(200).send(req.params);
};
const getTimeSheetRecordById = async (req, res) => {
  res.status(200).send("Get Time Sheet By ID");
};
const updateTimeSheetRecordById = async (req, res) => {
  res.status(200).send("Update Time Sheet by ID");
};
const deleteTimeSheetRecordById = async (req, res) => {
  res.status(200).send("Delete Time Sheet by ID");
};
const getTimeSheetRecords = async (req, res) => {
  res.status(200).send("Get Many Time Sheet Records");
};

module.exports = { addTimeSheetRecord, addTimeSheetRecordById, getTimeSheetRecordById, updateTimeSheetRecordById, deleteTimeSheetRecordById, getTimeSheetRecords };
