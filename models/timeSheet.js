const mongoose = require("mongoose");

const timeSheetSchema = new mongoose.Schema({
  timeSheet: {
    type: String,
    required: true,
    minLength: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Timesheet", timeSheetSchema);
