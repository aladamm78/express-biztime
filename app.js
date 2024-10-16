// app.js
const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const companiesRoutes = require("./routes/companies");
const invoicesRoutes = require("./routes/invoices");

app.use(express.json()); // Middleware to parse JSON

app.use("/companies", companiesRoutes);
app.use("/invoices", invoicesRoutes); // Use the invoices routes

// 404 handler
app.use((req, res, next) => {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

// General error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;
