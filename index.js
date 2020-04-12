var express		= require("express");
var app = express();
var bodyParser = require("body-parser");

var Routes = require("./routes/titles");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use("/api/titles", Routes);

app.get("/", function(req, res){
	res.sendFile("index.html");
});



var port = process.env.PORT || 3001;
app.listen(port, function(){
	console.log("Server now running..");
});