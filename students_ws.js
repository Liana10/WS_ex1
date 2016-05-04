//web service file
//get students array from static json file
var studentsArray = require('./data/students.json');
//get grades array from static json file
var gradesArray = require('./data/grades.json');

//get total students number
exports.studentsNumber = function() {
	return studentsArray.length;
};

//get array of all students 
exports.getAllStudent = function(){
	return studentsArray;
}

//get specific student by id 
exports.getStudentById = function(id){
	
	//loop through all students 
	for (var i = 0; i < studentsArray.length; i++) {
		
		//if the current iterated studnet has the parameter id return it. 
		if (studentsArray[i].id == id) {
			return studentsArray[i];
		}
	}
	return null;
}

//get all students that took a course in a specific year
exports.getStudentsByYear = function(year){
	
	//student id list
	var studentsIds = [];
	//student list to return 
	var studentsReturn = [];
	
	//loop through all grades 
	for (var i = 0; i < gradesArray.length; i++) {
		if (gradesArray[i].year == Number(year)) {
			studentsIds.push(gradesArray[i].studentId);
		}
	}
	
	//loop through all students 
	for (var i = 0; i < studentsArray.length; i++) {
		
		//if the current iterated student exist in the studentsIds array then push it to studentsReturn array
		if (studentsIds.indexOf(studentsArray[i].id) > -1) {
			studentsReturn.push(studentsArray[i]);
		}
	}
	
	//return the array studentsReturn
	return studentsReturn;
}
