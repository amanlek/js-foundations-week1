//    1) 5 examples of Destructuring
//1.1 Basic array Destructuring
const arr = [10, 20, 30];
const [a, b, c] = arr; // allocates each element separately
console.log(a, b, c); //prints 10 20 30

//1.2 Skipping elements
let ar = [1,2,3];
let [,sec] = ar; // skips 1st element
console.log(sec); //prints 2

//1.3 Using rest operator
const num = [1, 2, 3, 4];
const [first, ...rest] = num;
console.log(first, rest); //first -> 1  res -> [2,3,4]

// 1.4 object destructuring
const user = { name: "Aman", age: 22 };
const { name, age } = user; //name and age assigned to variables from an object
console.log(name, age);

//1.5 Swapping elements
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q);



//    2) 5 examples using spread operator
//2.1 in array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  

console.log(arr2); // 1 2 3

//2.2 merge array
const m = [1, 2];
const n = [3, 4];

const merged = [...m, ...n];
console.log(merged); //1 2 3 4 

//2.3 with objects
const userData = { name: "Aman", age: 22 };
const copy = { ...userData }; //userData copied to copy object

//2.4 Add elements while copying
const nums = [1, 2, 3];
const updated = [0, ...nums, 4];

console.log(updated); // 0 1 2 3 4

//2.5 spread in function calls
const array = [10, 20, 30];
function add(a, b, c) {
    return a + b + c; 
}

console.log(add(...array));  //60



//    3) Convert 5 normal functions to arrow functions
//3.1 
function sum(a,b){
    return a+b;
}

const sumArrow = (a,b) => a+b;

//3.2
function square(n) {
    return n * n;
}

const squareArrow = n => n*n;

//3.3
function sayHello(){
    console.log("Hello");
}

const sayHelloArrow = () =>{
    console.log("Hello");
}

//3.4
function isEven(num) {
    return num % 2 === 0;
}

const isEvenArrow = num => num % 2 === 0;

//3.5
function max(a, b) {
    return a > b ? a : b;
}

const maxArrow = (a, b) => a > b ? a : b;




//4) block scope difference between var & let
//4.1 normal block scope diff
if (true) {
    var x = 10;
}
console.log(x);  /*  prints 10 because var is not block scoped. It is functioned / global scoped. That means */

if(true){
    let a= 10;
}
console.log(a); /* Reference Error as let is block scope that exist between {} only */


//4.2 block shadowing
var y = 5;
if(true){
    var y = 10; //same variable y, that means inner y affects outer y
    console.log(y); //10
}
console.log(y); //10

let v = 5;
if (true) {
    let v = 10; // new block scoped variable
    console.log(v); // 10
}
console.log(v); // 5


//4.3 closure issue in loops
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); 
    }, 1000);
} //prints 333 due to shared same memory of var.

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
} //prints 012 with the help of let. let create new block scope variable each time.















// const a =1;
// if(a==1){
//     let a=8;
//     a= 5;
//     console.log(a);

// }

// console.log(a);

// const ar = {b : "123"};
// ar.b = "234";
// console.log(ar);