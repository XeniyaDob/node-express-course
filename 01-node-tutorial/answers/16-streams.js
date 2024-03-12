const { createReadStream } = require("fs");

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('../content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream(
  "../content/big.txt",
  { highWaterMark: 200 },
  { encoding: "utf8" }
);
let counter = 0;
stream.on("data", (result) => {
  counter++;
  console.log(result);
});
stream.on("end", () => {
  console.log(`Total is ${counter} chunks of data.`);
});

stream.on("error", (err) => console.log(err));
