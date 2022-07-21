const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "This business name is already in use"],
  },
  address: {
    streetAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postCode: {
      type: String,
    },
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  registrationNumber: {
    type: String,
    unique: [true, "This registeration number is already in use"],
  },
  timeSheet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Timesheet" }],
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
});

module.exports = mongoose.model("business", businessSchema);
