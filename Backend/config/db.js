const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect("mongodb+srv://bisht:bisht@cluster0.s3iq8ai.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");
module.exports = {
  connection,
};
