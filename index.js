const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const routes = require("./routes/routes");

mongoose
  .connect(
    "mongodb+srv://marelab:marelab@cluster0.bqhri.mongodb.net/e-commerce"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(5000);
