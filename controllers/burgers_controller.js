// Dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


// We first define our first route, the home screen route
// This route will display all of our burgers 
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let allBurgers = { burgers: data };
    res.render("index", allBurgers);
  });
});

// The second route defines the parameters for inserting a new burger to the database
router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.name, "0"], function (result) {
    res.json({ id: result.insertId });
  });
});

// The third route defines the parameters for updating a burger to be devoured
router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne({ devoured: "1" }, condition, function (result) {
    if (result.changedRows == 0) { return res.status(404).end() }
    else { res.status(200).end() }
  });
});

module.exports = router;