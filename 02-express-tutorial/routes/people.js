const express = require("express");
const router = express.Router();
const {
  addPerson,
  getPeople,
  getPersonById,
} = require("../controllers/people.js");

router.get("/", getPeople);

router.get("/:id", getPersonById);

router.post("/", addPerson);

module.exports = router;