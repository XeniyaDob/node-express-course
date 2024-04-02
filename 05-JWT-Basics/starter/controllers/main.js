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
  //res.send("Fake Login/Register/Signup");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Hello, John Doe`,
    secret: `Here is your authorized data, and your lucky number: ${luckyNumber} `,
  });
};

module.exports = { login, dashboard };
