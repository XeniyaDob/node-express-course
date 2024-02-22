const names = require("./04-names.js");
const feed = require("./05-utils.js");
const food = require("./06-alternative-flavor.js");
require("./07-mind-grenade.js");

console.log(names.dogName, names.catName, names.lizardName);
feed(names.dogName, names.catName, names.lizardName);
console.log(food);
