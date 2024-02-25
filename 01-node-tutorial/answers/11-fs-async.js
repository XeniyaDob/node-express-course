const { writeFile } = require("fs");

const file = "./temporary/asyncOutput.txt";

//callback hell

// console.log("at start");

// writeFile(file, "This is line 1\n", (err) => {
//   console.log("at point 1");

//   if (err) {
//     console.log("This error happened at point 1: ", err);
//     return;
//   } else {
//     writeFile(file, "This is line 2\n", { flag: "a" }, (err) => {
//       console.log("at point 2");
//       if (err) {
//         console.log("This error happened at point 2: ", err);
//         return;
//       } else {
//         writeFile(file, "This is line 3\n", { flag: "a" }, (err) => {
//           console.log("at point 3");
//           if (err) {
//             console.log("This error happened at point 2: ", err);
//             return;
//           } else {
//             console.log("Success");
//           }
//         });
//       }
//     });
//   }
// });

// console.log("at end");

//one more option
console.log("Start");
const writeLinesToFile = () =>
  writeFile(file, "I am one of 3 lines\n", { flag: "a" }, (err, result) => {
    console.log("Done");
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(result);
    }
  });

writeLinesToFile();
writeLinesToFile();
writeLinesToFile();

console.log("Finish");
