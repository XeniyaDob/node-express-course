const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    const lines = ["I am 1t line\n", "I am 2d line\n", "I am 3d line\n"];

    return await writeFile("./temporary/temp.txt", lines, { flag: "a" });
  } catch (error) {
    console.log("An error occurred during writing to a file: ", error);
  }
};
const reader = async () => {
  try {
    const result = await readFile("./temporary/temp.txt", "utf-8");

    console.log("Reading>>>", result);
  } catch (error) {
    console.log("An error occurred during reading from a file: ", error);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (error) {
    console.log("An error occurred during a call back functions: ", error);
  }
};
readWrite();
