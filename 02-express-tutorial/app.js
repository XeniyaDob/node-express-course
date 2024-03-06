const express = require("express");
const { products } = require("./data");

//invoke express
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

//handle page not found conditions
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
