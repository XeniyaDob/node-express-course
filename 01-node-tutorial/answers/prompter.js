const http = require("http");
const fs = require("fs");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let heading = "Life journal";
let title = "New title";
let thoughts = "New thoughts";
let color = "white";
// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.

const form = () => {
  return `
  <body style="background-color:${color}">
  <form method="POST">

  <div style="display: flex; flex-direction: column; width:20rem;">
    <h1>${heading}</h1>

    <h3>Title:</h3>
    <input name="title"></input>
    <h3>Your thoughts:</h3>
    <textarea name="thoughts"></textarea>
    <label for="color" style="margin-top:1rem">Choose a background color</label>
    <select name="color" id="color" >
    <option value="color">All Colors</option>
    <option value="white">White</option>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    <option value="yellow">Yellow</option>
    </select>
    <button type="submit" style="width:5rem; margin-top:1rem">Submit</button>
   
    <p>${title}</p>
    <p>${thoughts} </p>
  </div>
  </form>
  </body>
  `;
};
const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic

      if (body.color) {
        color = body.color;
      }

      const records = {
        title: body["title"] || "No title provided",
        thoughts: body["thoughts"] || "No thoughts provided",
        date: new Date().toISOString(),
      };
      fs.writeFile(
        "./temporary/prompter-records.json",
        JSON.stringify(records),
        (err) => {
          if (err) throw err;
          console.log("Success!");
        }
      );

      title = records.title;
      thoughts = records.thoughts;

      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");