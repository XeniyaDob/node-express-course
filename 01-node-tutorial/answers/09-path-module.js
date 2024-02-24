const path = require("path");

console.log(path.sep);

//join - joins a sequence of path segments
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//returns an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
