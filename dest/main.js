function displayAppName () {
	console.log("created app file");
}
var student = function () {this.name = "raman";}

student.prototype.displayname = function () {
	console.log(this.name);
};

var obj = new student();
obj.displayname();
var teacher = function () {
	this.name = "raman";
}

teacher.prototype.displayname = function () {
	console.log(this.name);
};

var obj = new teacher();
obj.displayname();