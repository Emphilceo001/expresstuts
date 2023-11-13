const express = require("express");
const app = express();
const PORT = 5050;
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");

const mongoDBUrl = process.env.DBURL;
//custom middlewares
app.set("view engine", "ejs");
// app.set("view engine", "ejs");
// app.use((req, res) => {
//   console.log("new request made");
//   console.log("host: ", req.hostname);
//   console.log("path", req.path);
//   console.log("method", req.method);
//   next();
// });
app.use(morgan("dev"));
app.use(express.static("public"));

// Routee
// app.get("/", (req, res) => {
//   res.send("Welcome Home");
// });

const tasks = [
  {
    name: "Emphil",
    title: "emphil clothing",
    task: "client deliveries this morning",
  },
  {
    name: "Steve",
    title: "steve clothing",
    task: "client deliveries this afternoon",
  },
  {
    name: "Enoo",
    title: "enoo clothing",
    task: "client deliveries this evening",
  },
];
app.get("/", (req, res) => {
  res.render("index", { title: "Home || Page ", tasks });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About || Page " });
});

app.get("/task", (req, res) => {
  res.render("tasks", { title: "Task || Page " });
});

app.use((req, res) => {
  res.render("404", { title: "Error || Page " });
});

// db connection

mongoose.connect(mongoDBUrl).then(() => console.log("connected successfully!"));

app.listen(PORT, () => {
  console.log(`server connected to http://localhost:${PORT}`);
});
