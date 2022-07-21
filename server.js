const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");

const spinServer = require("./utils/spinServer");
const timeSheetRouter = require("./routes/timeSheet");
const businessRouter = require("./routes/business");
const employeeRouter = require("./routes/employee");
const authRouter = require("./routes/auth");
const errorHandler = require("./middlewares/errorHandler");
const exceptionHandler = require("./middlewares/exceptionHandler");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/business", businessRouter);
app.use("/api/v1/timesheets", timeSheetRouter);
app.use("/api/v1/employee", employeeRouter);

app.use(errorHandler);
app.use(exceptionHandler);

spinServer(app);
