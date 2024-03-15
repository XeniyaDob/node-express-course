const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/api/v1/people", peopleRouter);
// app.get("/api/v1/people", peopleRouter);

// app.post("/api/v1/people", peopleRouter);


app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
