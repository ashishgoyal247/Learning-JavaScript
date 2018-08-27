function Person(firstName, lastName) {

  // console.log(this); //Prints empty person object
  this.firstName = firstName;
  this.lastName = lastName;
  // console.log(this); //prints person object with firstname n lastname in it
}

Person.prototype.getFullName = function() {
  return this.firstName + '  ' + this.lastName;
}

var mac = new Person('Mac', 'Doe');
console.log(mac);

var alice = new Person('Alice', 'Sharma');
console.log(alice);

Person.prototype.getFullFormalName = function() {
  return this.lastName + '  ' + this.firstName; 
}