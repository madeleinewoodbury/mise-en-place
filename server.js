const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Load routes
const users = require("./routes/api/users");

// Init app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use routes
app.use("/api/users", users);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server running on port ${port}`));
