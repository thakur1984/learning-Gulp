var student = function () {this.name = "raman";}

student.prototype.displayname = function () {
	console.log(this.name);
};

var obj = new student();
obj.displayname();