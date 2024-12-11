const mongoose = require("mongoose");



const URL = process.env.DataBase

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Connection failed", error);
  });
