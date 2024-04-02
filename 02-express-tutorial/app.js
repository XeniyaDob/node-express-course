const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("./middleware/logger");
const app = express();

// Use the logger middleware
app.use(logger);

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use(cookieParser());

const authRouter = require("./routes/auth");
const peopleRouter = require("./routes/people");
const productsRouter = require("./routes/products");

app.use("/", authRouter);
app.use("/api/v1/people", peopleRouter);
app.use("/api/v1", productsRouter);

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});