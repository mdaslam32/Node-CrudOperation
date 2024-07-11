const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/UserDB";
const app = express();

// Connect Database
mongoose.connect(url);
const con = mongoose.connection;
con.on("open", () => {
  console.log("Database Connected...");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configure the port
app.listen(3000, () => {
  console.log("Server listening on port:3000");
});

// Send response to the port
app.get("/", (req, res) => {
  res.send("Hello from Node JS");
});

// Configure the router
const userRouter = require("./routes/users.js");
app.use("/users", userRouter);
