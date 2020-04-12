var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb+srv://venkatesh:Yesmongodb%401710@mycluster-fyzgz.mongodb.net/test?retryWrites=true&w=majority' ,{useNewUrlParser: true, useUnifiedTopology: true});
//mongodb://localhost:27017/watchnext-api'
mongoose.Promise = Promise;

module.exports.Title = require("./title");