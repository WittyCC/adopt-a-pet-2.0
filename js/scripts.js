//Business Logic

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
var myCenter = [];

var pet1 = new Pet ("Bruce", "dog");
pet1.setIsAvailable(true);
myCenter.push(pet1);

var pet2 = new Pet ("Mary", "dog");
pet2.setIsAvailable(true);
myCenter.push(pet2);

var pet3 = new Pet ("Cheeto", "dog");
pet3.setIsAvailable(true);
myCenter.push(pet3);

var pet4 = new Pet ("Smokey", "dog");
pet4.setIsAvailable(true);
myCenter.push(pet4);

var pet5 = new Pet ("Orfeo", "dog");
pet5.setIsAvailable(true);
myCenter.push(pet5);

var pet6 = new Pet ("Puffy", "dog");
pet6.setIsAvailable(true);
myCenter.push(pet6);

var pet7 = new Pet ("Ranger", "cat");
pet7.setIsAvailable(false);
myCenter.push(pet7);

var pet8 = new Pet ("Dallas", "cat");
pet8.setIsAvailable(false);
myCenter.push(pet8);

var pet9 = new Pet ("Velcro", "cat");
pet9.setIsAvailable(true);
myCenter.push(pet9);

//User Interface
$(function() {
  //Loop through the Center object//create a list item for each pet
  myCenter.forEach(function(pet) {
    $("#petList").append("<li class='petClass'>" + pet.name + "</li>");
    //each name will be a link to details of the pet
    $(".petClass").last().click(function(){
      $("#spanName").text(pet.name);
      $("#spanType").text(pet.type);
      $("#spanAvailability").text(pet.isAvailable);
    });

  });

});
