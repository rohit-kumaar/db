const express = require("express");
const routes = express.Router();
const Note = require("../models/Note");

routes.get("/", (req, res) => {
  console.log(req.body);
  const note = Note(req.body);
  note.save();
  res.send(req.body);
});

module.exports = routes;
