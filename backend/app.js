const express = require("express");
const cors = require("cors");

const userRoutes = require(
  "./routes/userRoutes"
);

const formRoutes = require(
  "./routes/formRoutes"
);

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/forms", formRoutes);

module.exports = app;