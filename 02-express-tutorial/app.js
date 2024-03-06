const express = require("express");

//invoke express
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

//handle page not found conditions
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
