const express = require("express");
const router = express.Router();
const {
  addPerson,
  getPeople,
  getPersonById,
  updatePerson,
} = require("../controllers/people.js");

router.get("/", getPeople);

router.get("/:id", getPersonById);

router.post("/", addPerson);

router.put("/:id", updatePerson);

module.exports = router;