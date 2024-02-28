const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/tempThen.txt", "I am 1t line\n")
  .then(() => {
    return writeFile("./temporary/tempThen.txt", "I am 2d line\n", {
      flag: "a",
    }); // write line 2.
    // Return the promise so you can chain the .then statements
  })
  .then(() => {
    return writeFile("./temporary/tempThen.txt", "I am 3d line\n", {
      flag: "a",
    }); // write line 3.
    // Return the promise so you can chain the .then statements
  })
  .then(() => {
    const result = readFile("./temporary/tempThen.txt", "utf-8"); // Read file
    return result;
  })
  .then((result) => {
    console.log("Reading>>>", result);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
