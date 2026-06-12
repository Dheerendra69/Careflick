const express = require("express");

const {
  getForms,
  getUserForms,
  createForm,
  deleteForm,
} = require(
  "../controllers/formController"
);

const router =
  express.Router();

router.get("/", getForms);

router.get(
  "/user/:userId",
  getUserForms
);

router.post("/", createForm);

router.delete("/:id", deleteForm);

module.exports = router;