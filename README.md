                      JavaScript: Thee weird parts

SYNTAX PARSER:
Parses the code and determines what it will do if its grammar is correct.

Lexical Environment:
Where something sits physically in the code you write.
eg. a variable defined in the functin gives idea how it will interact with other variables and where it will be stored in the memory.

EXECUTION CONTEXT:
A wrapper to help manage the code that is running.

OBJECT:
A collection of name-value pairs.

GLOBAL EXECUTION CONTEXT:
Thing that is available everywhere to everything in your code. It creates a global object and a special variable 'this'.


Whenever js file is run, an execution context is created which creates a variable called 'this'.
Everything available on that window can be accessed using the global object 'window'. At global level
this and window are equal but 'this' changes for other execution context.

Execution Context Creating and Hoisting:
Run the program first.js......You will expect an erroe in most programming language because
we have not defined b and we are invoking it but JS runs it.
We will get undefined for a but it invokes b(). If we remove var a line we will get an error.

This phenomenon is called hoisting. To understand this we need to understand how execution context is created.
Execution context is created in 2 phases:

1. Creation phase:
Global object, 'this', outer environment and MEMORY SPACE FOR VARIABLES AND FUNCTIONS are created.
Setting up space for avariables and functions is called hoisting. It does not mean to move move functions
defined below to up. It means before you run your code line by line js engine creates memory 
for all the variables and functions in your code.
So when code is executed line by line they already exist in the memory.

In this phase function name and code is entirely there in the memory.
For variables its name is there in the memory but it is not assigned value because that is done
in the next step called assignment phase. So in the first phase all js variables are assigned 
placeholder 'undefined'

Undefined:
undefined is a special keyword in JS which means variable is not assigned any value.
Never set any variable to undefined yourself.

2. Code Exexution:
In this phase, code is runned line by line. Assignment of varible and function invocation is done in this phase.


Single Threaded:
One command is executed at a time. JS is single threaded.

Synchronous:
One line of code is executed at a time in order it appears.

Function invocation in JS:
Whenever a function is invoked it creates it's own execution context in execution stack having its own memory space for variables inside in it and then run cod in the function line by line.
The execution context at the top of execution stack is always the running function.

Variable environment:
Where the variable lives and how they interact with each other. Every execution context has its own variable environment. Variable with same name in diff functions have diff value due to diff variable environment.

SCOPE CHAIN:
Every execution context has a reference to outer context. The outer reference context may not be the reference context just below it or from which it is invoked. Whenever a variable is not found in the running execution context it looks at the outer execution context.
Outer reference depends where function sits lexically. THis act of finding variables in diff execution stack is called scope chain.
Check scope_chain.js.

Instead of using var we can use let which doesn't allow variable to be used before execution phase.

Asynchronous:
More than one at a time. JS is synchronous i.e. one command at a time. Other than JS engine there are other things running within browser....like rendering engine which prints to the screen, HTTP request etc. JS engine talks to all these elements and engine through hooks. All these engines are working asynchronously. Activities happening within the JS is synchronous.

Within JS there is a queue called event queue where all activities happening outside js engine gets stored by the browser. eg click event, http request etc. Whenever execution stack gets empty the event queue is processed and JS functions are called if required. All these events are called only when execution stack gets empty.

check asynchronous.js

Dynamic type:
In JS variables are of dynamic type ie same variable can ake diff type of values. JS engines figures out type of data during execution phase.

Different js script tags do not create diff execution stack. They are considered same file. So be careful while naming a variable.


OBJECT AND FUNCIONS IN JS:

var person = new Object;

The above statement can also be written as
var person = {};

Whenever we write {}, we are creating a new object. Properties can also be mentioned within these brackets.

var Person = {firstName: 'Ashish', lastName: 'Goyal'};

JS doesn't have Namespaces. So we can use objects to fake namespaces.
eg: var greet = 'hello';
    var greet = 'hola';

    This will override each other. Instead we can make 2 objects and make greet its property.

    var english = {greet: 'hello'}, var spanish = {greet: 'hola'};

JSON:
JSON is one of the way to send data over net. It is inspired from JS object literal notation but is diff from JS object. It was started to remove the unecessary characters sent in XML format.

JSON vs JS object:
In JSON property needs to be wrapped in "" but it is not necessary in JS.

{"firstName": "ashish"} // This will work in JSON and JS.
{firstName: "ashish"} // This will not work in JSON but work in JS.

All JSON object can be used as JS object but all JS object cannot be used as JSON object.

To convert JS object to JSON use: JSON.stringify(objectLiteralName)
To convert JSON to JS object literal: JSON.parse('{"firstName": "ashish"}')

FIRST CLASS FUNCTIONS:
Everything you can do with other types like object, string, numbers etc(assign them to variables,pass them around, create them on fly) can be done with functions.

FUNCTIONS ARE OBJECT IN JS:
You can attach other primitive data types, objects and functions to function because they are also objects.

Functions are special objects because:
1. Name of the function is optional.
2. It has one more special property where all code resides. This property is invocable.

CHECK understanding_function.js

Expression:
A unit of code that results a value. It doesn't have to save to a variable. 

Primitive types use Copy by Value in JS. So new memory is allocated to new variable.

Objects(including functions) use Copy by reference i.e the new object points to same memory location as the old one.

'this':
Value of this depends on how and from where the function is invoked.

Using == makes code difficult to debug and causes unexpexted errors as it coerces the value and changes the type as shown below:

Number(undefined) = NaN
Number(null) = 0
Number(false) = 0
false == 0 //true
null == 0 //false
null < 1 //true
"" == 0 //true
"" == false //true

Use === to check the type and then compare:
3 === 3 //true
3 === "3" //false

Boolean(undefined) //false
Boolean(false) //false
Boolean("") //false

All these things that imply lack of existence they convert to false.

Whenever a function is invoked which is attached to an object this keyword becomes the object that method is sitting inside of. JS engines check the function is attached to an object. So it assigns this to the object which contains that function.

JS doesn't have function overloading.

While defining a function without a name in a new line enclose it within () so to trick tje syntax parser

All objects in JavaScript(includeing functions) have a prototype property. This property is simply a reference to another object called proto.

Reflection:
JS objects can look at itslef, listing and changing its properties and methods. In other words you can check if a given property is attached to object or it is there in prototype chain.

Extend:
Extend is the underscore.js method which is used to include all properties of other object into a specific object.
_.extend(a, b, c) //Here all properties of b and c will be included in a
Check understanding extend.js


BUILDIING OBJECT

'new' in JS:
Whenever we use new in JS it calls creates an empty object.
After that function(constructor) is invoked. THis invoked function makes an execution context and this. Here this points to empty object created by new. In case nothing is returned in constructor it returns the object pinted by this.

Setting the prototype:
Every function in JS have prototype. Unless function is used as constructor function prototype is never used. Function prototype is used by the new operator. Function prototype is not the prototype for the function, it's for the object created using that function.

WHile making new object property and variavles are defined in constructor but methods are defines using Prototype because anything inside function takes memory. So if it was inside the function if we create 1000 object 1000 methods taking diff memory spaces will be created. But if we put it in prototype it will just take space at one place which can be accessed by all objects.
Checkout understanding_object_building.js

Usually functions which are used as constructors have name with first alphabet capital so to avoid the confusion and make sure new keyword is used before invoking them.

Note:
Array is an object and each of its item is a named value-pair so each item becomes a new property. So avoid using for in while iterating array as it will show any prototype added to array because in syntax iterates down the prototype.

Arrow functions cannot be used as constructors.

Pure Prototypal Inheritance:
Object.create() creates an empty object with prototype pointing to whatever is passed inside Objec.create().