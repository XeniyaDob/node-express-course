const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ msg: "Provide name and password" });
  }

  //just for demo, normally provided by DB!!!!
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
  const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.status(200).json({ msg: "User created", token });
};

const hello = async (req, res) => {
  res.status(200).json({ msg: `Hello, ${req.user.name}` });
};

module.exports = {
  logon,
  hello,
};