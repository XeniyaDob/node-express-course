const express = require("express");
const router = express.Router();
const { logOn, logOff, test } = require("../controllers/auth");
const { auth } = require("../middleware/auth");

router.post("/logon", logOn);
router.delete("/logoff", logOff);
router.get("/test", auth, test);

module.exports = router;
