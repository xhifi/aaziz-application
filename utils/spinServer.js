const mongoConnection = require("./mongoConnection");

const spinServer = async (app) => {
  try {
    mongoConnection(process.env.mongo_URI || "mongodb://localhost:27017/aaziz-application");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is Running on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.log(`Error Connecting to the server ${error}`);
  }
};

module.exports = spinServer;
