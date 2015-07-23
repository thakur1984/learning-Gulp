var teacher = function () {
	this.name = "raman";
}

teacher.prototype.displayname = function () {
	console.log(this.name);
};

var obj = new teacher();
obj.displayname();