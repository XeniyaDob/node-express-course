const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
// setup authentication so only the request with JWT can access the dashboard

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  //1 option: mongoose validation - used it in 03-task-manager -> controllers and models
  //2 option: Joi package- we will do in later app

  //3 option: check in the controller
  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }
  //Just for Demo, normally provided by DB!!!
  const id = new Date().getDate();

  //try to keep payload small, better experience for user
  //just for demo, in production use long, complex and unguessable string value!!!!!!!!!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ message: "user created", token });
};

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new CustomAPIError("No token provided", 401);
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const luckyNumber = Math.floor(Math.random() * 100);
      res.status(200).json({
        message: `Hello, ${decoded.username}`,
        secret: `Here is your authorized data, and your lucky number is ${luckyNumber}`,
      });
    } catch (error) {
      throw new CustomAPIError("Not authorized to access this route", 401);
    }
};

module.exports = { login, dashboard };
