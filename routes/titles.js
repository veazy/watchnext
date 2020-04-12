var express = require("express"),
	router = express.Router(),
	db = require("../models"),
	helpers = require("../helpers/titles");

router.route("/")
	.get(helpers.getTitles)
	.post(helpers.createTitle)

router.route("/:titleId")
	.get(helpers.getTitle)
	.put(helpers.updateTitle)
	.delete(helpers.removeTitle)

module.exports = router;