var db = require("../models");

exports.getTitles = function(req, res){
	db.Title.find()
	.then(function(titles){
		res.json(titles);
	})
	.catch(function(err){
		console.log(err);
	})
}

exports.createTitle = function(req, res){
	db.Title.create(req.body)
	.then(function(newTitle){
		res.status(201).json(newTitle);
	})
	.catch(function(err){
		console.log(err);
	})
}

exports.getTitle = function(req, res){
	db.Title.findById(req.params.titleId)
	.then(function(foundTitle){
		res.json(foundTitle);
	})
	.catch(function(err){
		console.log(err);
	})
}

exports.updateTitle = function(req, res){
	db.Title.findOneAndUpdate({_id: req.params.titleId}, req.body, {new: true})
	.then(function(title){
		res.json(title);
	})
	.catch(function(err){
		console.log(err);
	})
}

exports.removeTitle = function(req, res){
	db.Title.remove({_id: req.params.titleId})
	.then(function(){
		res.json({message: 'Deleted'});
	})
	.catch(function(err){
		console.log(err);
	})
}