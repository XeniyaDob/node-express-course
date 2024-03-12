const EventEmitter = require("events");

const emitter = new EventEmitter();

const { readFile } = require("fs").promises;

const textReader = async () => {
  try {
    //try to read files that was created using program named writeWithPromisesThen.js
    text = await readFile("./temporary/tempThen.txt", "utf-8");

    setTimeout(() => {
      emitter.emit("result", text);
    }, 2000);
  } catch (err) {
    console.log("An error occurred during reading a file: ", err);
  }
};

emitter.on("result", (msg) => console.log(msg));
textReader();
