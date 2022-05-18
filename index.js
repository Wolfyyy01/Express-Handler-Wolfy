const express = require("express");
const path = require("path");

const console = require("./events/ready");
const config = require("./config.json");

const app = express();

//app conf
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(require("./routes"));

app.listen(config.port, () => {
  console("Server Started!");
});
