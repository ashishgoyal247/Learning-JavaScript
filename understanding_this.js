function a() {
  console.log(this); //this points to window i.e. gloabal execution context.
  this.newVariable = 'hello'; //Attaches to global object i.e. window
}

var b = function() {
  console.log(this);
}

a();//this points to window i.e. gloabal execution context.

console.log(newVariable); //prints hello

b();//this points to window i.e. gloabal execution context.



var c = {
  name: "ashish",
  newMethod: function() {
    console.log(this);
  }
}
c.newMethod(); // prints {name: "ashish", newMethod: ƒ}

var d = {
  name: "ashish",
  newMethod: function() {
    console.log(this);

    var setName = function(newName) {
      console.log(this); //points to window
      this.name = newName; //points to global object as it is not called through object.
    }

    setName('goyal'); //sets window.name to 'goyal'.
    console.log(this);
  }
}

d.newMethod();