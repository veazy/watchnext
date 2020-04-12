var mongoose = require("mongoose");

var titleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: 'Name cannot be blank.'
	},
	completed: {
		type: Boolean,
		default: false
	},
	date_created: {
		type: Date,
		default: Date.now
	}
});

var Title = mongoose.model('Title', titleSchema);
module.exports = Title;