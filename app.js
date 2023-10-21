// DEPENDENCIES
const express = require("express");

const transactions = require("./controllers/transactionsController.js");

// CONFIGURATION
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/transactions", transactions);

// ROUTES
app.get("/", (req, res) => {
  res.send("💰Welcome to Aisha's Budgeting App💵");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "no page found " });
});

module.exports = app;
