**When should we use const?**

-> Their are few situations when const should be used 

&nbsp;	1. When the variable should not be reassigned, this prevents accidental reassignment

&nbsp;		example:- const max\_limit = 100;

&nbsp;	2. When objects/arrays reference should stay same, but values can be changed. This protects the reference not the content.

&nbsp;		example:- const user = { name: "Aman" };

&nbsp;			  user.name = "Rahul"; 

&nbsp;	3. We can use const for function declarations to prevent function reassignment.

&nbsp;	4. For configuration values like API\_URL or TIMEOUT;

&nbsp;	

**When does var cause problems?**

**->** 	1. When used in async loop code, because var creates one shared variable and Callbacks run after loop ends.

&nbsp;	2. When variables get accidentally overwritten in any block. Inner variable shadows outer variable.

&nbsp;	3. var allows redeclarations, there might be accidental overwrites.

&nbsp;	4. When used inside blocks (if, for, while), var leaks outside the blocks that can overwrite outer variable.



**When should arrow functions NOT be used?**

->	1. Arrow functions should not be used as a object method, as it does not have its own this it refers to outer scope(window/undefined).

&nbsp;	2. Should not be used as a constructor, because it cannot be used with new keyword. That means they do not have prototype.

&nbsp;	3. Should not be used as event handler when 'this' is required.

&nbsp;	4. when function needs to be hoisted, because arrow functions are not hoisted to the top.

&nbsp;	5. when we need arguments object, because arrow function do not have arguments.

&nbsp;		

