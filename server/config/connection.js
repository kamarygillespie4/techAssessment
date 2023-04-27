const { connect, connection } = require("mongoose");
require("dotenv").config();

const connectionString =
  "mongodb+srv://admin1:admin1@cluster0.prbigx3.mongodb.net/?retryWrites=true&w=majority";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
