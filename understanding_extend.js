var person = {
  firstName: 'default firstName',
  lastName: 'default lastName',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

var john = {
  firstName: 'Ashish',
  lastName: 'Goyal'
}

john.__proto__ = person;

for (var prop in john) {
  if(john.hasOwnProperty(prop))
  console.log(prop + '   ' + john[prop]);
}


var jane = {
  address: "Delhi, India",
  getFormalFullName: function() {
    return this.lastName + '   ' + this.firstName;
  }
}

var jim = {
  getFirstName: function() {
    return firstName;
  }
}
_.extend(john, jane, jim);

console.log(john);