const express = require("express");
const router = express.Router();
const {
  getPeople,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people.js");

router.route("/").get(getPeople).post(addPerson);
router.route("/:id").get(getPersonById).put(updatePerson).delete(deletePerson);


module.exports = router;