const express = require("express");
const router = express.Router();

const { logon, hello } = require("../controllers/main");

router.route("/hello").get(hello);
router.route("/logon").post(logon);

module.exports = router;
