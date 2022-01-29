var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.json({"Application":"CI/CD Demo Application","Status":"UP"});
});

app.listen(3000);