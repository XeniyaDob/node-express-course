const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");
const productsRouter = require("./routes/products");
//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/api/v1/people", peopleRouter);
app.use("/api/v1", productsRouter);

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
