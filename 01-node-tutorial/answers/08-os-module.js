const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  platform: os.platform(),
  version: os.version(),
};
console.log(currentOS);
