const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  personalDetails: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    NINumber: {
      type: String,
      minlength: 9,
      maxLength: 9,
      unique: [true, "Please provide your own NI Number"],
    },
    phoneNumber: {
      type: String,
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
  },
  userName: {
    type: String,
    required: [true, "Please provide a valid username"],
    unique: [true, "This username is already in use"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a valid email"],
    unique: [true, "This email is already in use"],
  },
  password: {
    type: String,
    required: [true, "Please provide a valid password"],
  },
  role: {
    type: String,
    enum: ["admin", "employee", "client"],
    default: "client",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});
UserSchema.methods.compare = async function (pwd) {
  return await bcrypt.compare(pwd, this.password);
};
UserSchema.methods.createJWT = async function () {
  return jwt.sign({ userId: this._id, userRole: this.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
UserSchema.methods.resolveJWT = async function () {
  return "TODO USER MODEL MIDDLEWARE";
};

module.exports = mongoose.model("User", UserSchema);
