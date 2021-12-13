require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.DATABASE;

mongoose.Promise = global.Promise;

const connectToMongo = () => {
  mongoose.connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
    () => {
      console.log("Connected to Mongo Successfully");
    }
  );
};

module.exports = connectToMongo;