const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const dateTime = new Date().toISOString();

  const logLevel = "INFO"; //debug, info, warning, error, fatal
  const msg = `method ${method} called on ${url}`;
  console.log(`[${dateTime}] ${logLevel} - ${msg}`);
  next();
};
module.exports = logger;
