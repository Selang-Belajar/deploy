// use express
const express = require("express");
// use cors
const cors = require("cors");
// use morgan
const morgan = require("morgan");
// use path
const path = require("path");

// define app
const app = express();

// use routers folder
const router = require("./routers");

// using depedencies
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.listen(3000, () => {
  console.log("Running on localhost:3000");
});
