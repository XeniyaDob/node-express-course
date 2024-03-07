const { dogName, catName, lizardName } = require("./04-names.js");
const feed = require("./05-utils.js");
const food = require("./06-alternative-flavor.js");
require("./07-mind-grenade.js");

console.log(dogName, catName, lizardName);
feed(dogName, catName, lizardName);
console.log(food);
