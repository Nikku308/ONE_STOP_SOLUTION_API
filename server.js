require("dotenv").config();   // ✅ MUST BE FIRST

const express = require("express");
const connectDB = require("./src/config/database");

const app = express();

// DB
connectDB();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

// Routes
app.use("/api", require("./src/app"));

module.exports = app;
