const mongoose = require("mongoose");

const mongoConnection = (url) => {
  try {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(`Error connecting to database ${error}`);
  }
};

module.exports = mongoConnection;
