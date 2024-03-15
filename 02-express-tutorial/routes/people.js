const express = require("express");
const router = express.Router();
const { addPerson, getPeople } = require("../controllers/people.js");

router.get("/", getPeople);

router.post("/", addPerson);

module.exports = router;