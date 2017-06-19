//Business Logic

var Center = [
  {name: "dog1", available: true, type: "dog"},
  {name: "dog2", available: true, type: "dog"},
  {name: "dog3", available: true, type: "dog"},
  {name: "dog4", available: true, type: "dog"},
  {name: "dog5", available: true, type: "dog"},
  {name: "dog6", available: true, type: "dog"},
  {name: "Ranger", available: false, type: "cat"},
  {name: "Dallas", available: false, type: "cat"},
  {name: "cat1", available: true, type: "cat"},];

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


//User Interface
$(function() {
//Loop through the Center object
fakeCenter.forEach(function(pet) {

})
//create a list item for each pet
//each list item has a name,
//each name will be a link to details of the pet
});

