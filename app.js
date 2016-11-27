var express = require('express');
var bodyParser = require("body-parser");
var cfenv = require('cfenv');


var app = express();
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.set("views", "./views");
app.set('view engine', 'jade');


app.use(express.static(__dirname + '/public'));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render("index", {title: "Login"});
});

/*
var adminRoomsRouter = require("./admin/rooms");
app.use("/admin/rooms", adminRoomsRouter);
*/



// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
