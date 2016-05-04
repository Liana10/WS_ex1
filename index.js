//this is the main file of the project
var express = require('express');	
var app = express();
var url = require('url');
var students = require('./students_ws'); 


var port = 3000;

//index page - http://localhost:3000
app.get('/', function (req, res) {
	res.status(200).json({status:true, message:"Welcome to shenkar students db"});
});

//get students number - http://localhost:3000/studentsNumber
app.get('/studentsNumber', function (req, res) {
	var studentsNumber = students.studentsNumber();
	res.json({"studentsNumber":studentsNumber, status:true});
});

//get array of all students - url for example - http://localhost:3000/getAllStudent
app.get('/getAllStudent', function (req, res) {
	var studentArray = students.getAllStudent();
	res.json({studentsArray : studentArray, status:true});
});

//get specific student by id - url for example - http://localhost:3000/getStudentById/1
app.get('/getStudentById/:id', function (req, res) {
	var student = students.getStudentById(req.params.id);
	res.json({student :student, status:true});
});

//get all students that took a course in a specific year - url for example - http://localhost:3000/getStudentsByYear/2015
app.get('/getStudentsByYear/:year', function (req, res) {
	var studentArray = students.getStudentsByYear(req.params.year);
	res.json({students :studentArray, status:true});
});

//url for example - http://localhost:3000/error
app.get('/error', function (req, res) {
	res.status(500).json({status:false, message:"Internal Server Error"});
});

app.listen(port);
console.log('Node app is running on port', port);
