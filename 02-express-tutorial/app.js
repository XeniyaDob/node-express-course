const express = require("express");
const app = express();
const logger = require("./logger");

//app.use(["/", "/about"], logger);
app.use(logger); //apply to all urls

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
