var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mysql=require("mysql");
app.use(bodyParser.urlencoded({ extended: true })); 
var connect_1=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'employe' ,
  port:"3306" 
})
connect_1.connect(function(error){
    if(error){
        console.log("Failed to connect..");
    }else{
        console.log("Datebase connected..");
    }
})
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/login.html'));
});
app.post('/auth', function(req, res) {
	var username = req.body.username;
    var password = req.body.password;
    connect_1.query("SELECT * FROM em_tb WHERE email='"+username+"';",function(err,result,fields){
         if(err){
             console.log("userName alredy exits..");
        }else{
         }
        }
        )
    res.sendFile(__dirname + '/signup.html');
});

app.get('/signup',function(req, res){
    res.sendFile(path.join(__dirname + '/signup.html'))
});
app.post('/valid',function(req, res){
    var username = req.body.email;
    var password = req.body.psw;
    connect_1.query("INSERT INTO em_tb VALUES (+'"+username+"','"+password+"')",function(err,result,fields){
         if(err){
             console.log("userName alredy exits..");
        }
        }
    )
    console.log();  
    res.redirect('/');
});
app.listen(8000, function(){
    console.log("Server Up and Running....");
});