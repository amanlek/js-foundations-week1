const users = [
 {id:1,name:"Aman",role:"Developer",active:true,salary:60000,address:{city:"Pune",state:"MH"}},
 {id:2,name:"Rohit",role:"Tester",active:false,salary:40000,address:{city:"Mumbai",state:"MH"}},
 {id:3,name:"Sneha",role:"Developer",active:true,salary:65000,address:{city:"Bengaluru",state:"KA"}},
 {id:4,name:"Priya",role:"Manager",active:false,salary:90000,address:{city:"Delhi",state:"DL"}},
 {id:5,name:"Karan",role:"Tester",active:true,salary:42000,address:{city:"Ahmedabad",state:"GJ"}},
 {id:6,name:"Neha",role:"HR",active:false,salary:50000,address:{city:"Jaipur",state:"RJ"}},
 {id:7,name:"Arjun",role:"Developer",active:false,salary:70000,address:{city:"Hyderabad",state:"TS"}},
 {id:8,name:"Pooja",role:"HR",active:true,salary:52000,address:{city:"Indore",state:"MP"}},
 {id:9,name:"Vikas",role:"Manager",active:false,salary:88000,address:{city:"Chandigarh",state:"PB"}},
 {id:10,name:"Anjali",role:"Tester",active:false,salary:45000,address:{city:"Nagpur",state:"MH"}},
 {id:11,name:"Rahul",role:"Developer",active:true,salary:68000,address:{city:"Noida",state:"UP"}},
 {id:12,name:"Meera",role:"HR",active:true,salary:null,address:{city:"Bhopal",state:"MP"}},
 {id:13,name:"Suresh",role:"Developer",active:false,salary:62000,address:{city:"Chennai",state:"TN"}},
 {id:14,name:"Isha",role:"Tester",active:false,salary:43000,address:{city:"Surat",state:"GJ"}},
 {id:15,name:"Nikhil",role:"Manager",active:true,salary:95000,address:{city:"Kolkata",state:"WB"}},
 {id:16,name:"Kavya",role:"Developer",active:false,salary:66000,address:{city:"Udaipur",state:"RJ"}},
 {id:17,name:"Amit",role:"Tester",active:false,salary:41000,address:{city:"Patna",state:"BR"}},
 {id:18,name:"Riya",role:"HR",active:true,salary:53000,address:{city:"Gwalior",state:"MP"}},
 {id:19,name:"Deepak",role:"Developer",active:true,salary:72000,address:{city:"Faridabad",state:"HR"}},
 {id:20,name:"Simran",role:"Manager",active:false,salary:98000,address:{city:"Gurgaon",state:"HR"}}
];




//----------filter method
const activeUsers = users.filter((user)=>user.active);   //this filters out the array to new array where users status is active, active = true.
console.log(activeUsers);
/*we use filter method to filter out some elements from array based on some conditions*/



//----------map method
const userNames = activeUsers.map(user => user.name);         //this creates new array of extracted name property from active users
console.log(userNames);
/*we use map method when we have to perform any operation on each element of array
and create a new array out of that, this does not update the old array*/



//-----------reduce method 
//for sum, avg and group

//SUM
const totalSalary = users.reduce((res, curr) =>{
   return res + (curr.salary||0); // This handles the edge case, if the salary is falsy(null, undefined) then the value would be taken as 0
  }, 0); // 0 is the initial value and each current element is stored in res
console.log(totalSalary);

//Average
const avgSalary = users.reduce((res, user, index, arr) => {  //it also demostrate use of value and index using reduce, here user->value
  res += user.salary;             // keep adding salaries
  if(index === arr.length -1){  
    return res / arr.length;      // return average   
  }
  return res;                     // return running total
}, 0); 
console.log(avgSalary); 

//Grouping based on role
const groupUser = users.reduce((group, user) => {
  if(!group[user.role]){        // if role key(group) does not exist, create it
    group[user.role] = [];
  }
  group[user.role].push(user.name);  // push user name into role array
  return group;
},{})
console.log(groupUser);
/*reduce method is used to get a single value from an
array by computing some operations ont each element of array*/



//--------chained operation 
const totalSalaryActive = users.filter((user) => user.active).map((user) => user.salary).reduce((res, curr)=> res + curr);
console.log(totalSalaryActive);

//--------object operations:
//1.1 Access object properties
console.log(users[0].name);
console.log(users[2].address.city);

//1.2 Update a property

const updatedUser = { ...users[0] }; //creates shallow copy using spread operator
updatedUser.name = "Aman2";
console.log(updatedUser.name);    //Aman2
console.log(users[0].name);       //Aman

//1.3 Add a new property
updatedUser.nickname = "Baman";      //adds new propertry nickname to new updatedUser 
console.log(updatedUser.nickname);  //Baman
console.log(users[0].nickname) //undefined 

//1.4 Copy an object using spread operator
const userCopy = {...users[10]}; //spread operator makes shallow copy
userCopy.salary = 0;
console.log(userCopy.salary); //0
console.log(users[10].salary);  //68000 
//this shows the original object is not changed with spread operator copy





