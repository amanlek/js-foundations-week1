
**When should we use const?**

-> Their are few situations when const should be used 
  1. When the variable should not be reassigned, this prevents accidental reassignment
  	example:- const max\_limit = 100;
	2. When objects/arrays reference should stay same, but values can be changed. This protects the reference not the content.
		example:- const user = { name: "Aman" };
  			      user.name = "Rahul"; 
	3. We can use const for function declarations to prevent function reassignment.
  4. For configuration values like API\_URL or TIMEOUT;



**When does var cause problems?**
->
  1. When used in async loop code, because var creates one shared variable and Callbacks run after loop ends.
	2. When variables get accidentally overwritten in any block. Inner variable shadows outer variable.
	3. var allows redeclarations, there might be accidental overwrites.
	4. When used inside blocks (if, for, while), var leaks outside the blocks that can overwrite outer variable.



**When should arrow functions NOT be used?**
->	
  1. Arrow functions should not be used as a object method, as it does not have its own this it refers to outer scope(window/undefined).
	2. Should not be used as a constructor, because it cannot be used with new keyword. That means they do not have prototype.
  3. Should not be used as event handler when 'this' is required.
  4. when function needs to be hoisted, because arrow functions are not hoisted to the top.
  5. when we need arguments object, because arrow function do not have arguments.


**Array methods chaining**
->
  Chaining array methods means calling multiple array methods one after another so that the output of one becomes the input of the next.
  You can chain methods as long as the previous method returns an array. 
    map() → returns array
    filter() → returns array
    reduce() → returns single value (usually end of chain)


**Accessing & Updating Object properties**
->
  1. using dot operator : Most common and used mostly when key is not dynamic, example - console.log(user.name); 
     Accessing in Nested objects:
 `      const employee = {
        name: "Aman",
        address: {
          city: "Pune",
          pincode: 411001
       }
     }; console.log(employee.address.city); //this prints Pune
  2. using Bracket Notations: Used for dynamic key access


**Shallow copy vs Deep Copy**
->
  Shallow Copy: A shallow copy copies only the top-level properties of an object. If the object has nested objects, they share the same reference.
    *Uses less memory
    *Nested objects are NOT copied
    *Changes in nested data affect the original object.
	
  Deep Copy: A deep copy copies all levels of an object, including nested objects. No shared references exist. 
    *Completely independent copy
    *Safe for nested objects
    *Uses more memory.
    
  
