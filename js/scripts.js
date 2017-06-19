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
  {name: "cat1", available: true, type: "cat"}];

  var fakeCenter = [
    {name: "dog1", isAvailable: true, type: "dog"},
    {name: "dog2", isAvailable: true, type: "dog"},
    {name: "dog3", isAvailable: true, type: "dog"},
    {name: "dog4", isAvailable: true, type: "dog"},
    {name: "dog5", isAvailable: true, type: "dog"},
    {name: "dog6", isAvailable: true, type: "dog"},
    {name: "Ranger", isAvailable: false, type: "cat"},
    {name: "Dallas", isAvailable: false, type: "cat"},
    {name: "cat1", isAvailable: true, type: "cat"}];

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
//Loop through the Center object//create a list item for each pet
fakeCenter.forEach(function(pet) {
  $("#petList").append("<li class='petClass'>" + pet.name + "</li>");
//each name will be a link to details of the pet
  $(".petClass").last().click(function(){
    $("#spanName").text(pet.name);
    $("#spanType").text(pet.type);
    $("#spanAvailability").text(pet.isAvailable);
});


});

});
