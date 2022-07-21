const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeePersonalData: {
    sexualTitle: {
      type: String,
      enum: ["Mr", "Ms", "Mrs", "Other"],
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    surName: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    NINumber: {
      type: String,
      required: true,
      minlength: 9,
      maxLength: 9,
      unique: true,
    },
    addressOfEmployee: {
      streetAddress: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      postCode: {
        type: String,
        required: true,
      },
    },
  },
  workDetails: {
    standardWage: {
      type: Boolean,
      default: false,
    },
    wageRate: {
      type: String,
    },
    hoursWorked: {
      type: String,
    },
    totalPay: {
      type: String,
    },
    // deductions: {
    //   type: String,
    // },
    // additions: {
    //   type: String,
    // },
    holidayPay: {
      type: String,
    },
    overtimePay: {
      type: String,
    },
    totalLeavesTaken: {
      type: Number,
    },
  },
  startingDate: {
    type: Date,
  },
  leavingDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
