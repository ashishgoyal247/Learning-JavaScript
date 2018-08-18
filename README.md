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