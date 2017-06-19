// business logic

function Pet (name,type) {
	this.name = name;
  this.type = type;
  this.isAvailable = true;
}

Pet.prototype.getName = function () {
	return this.name;
}

Pet.prototype.setName = function (name) {
	this.name = name;
}

Pet.prototype.getType = function () {
	return this.type;
}

Pet.prototype.setType = function (type) {
	this.type = type;
}

Pet.prototype.getIsAvailable = function () {
	return this.isAvailable;
}

Pet.prototype.setIsAvailable = function (isAvailable) {
	this.isAvailable = isAvailable;
} //must be true or false.
