const users = [
  {
    id: 1,
    name: "Aman",
    role: "Developer",
    active: true,
    salary: 60000,
    address: { city: "Pune", state: "MH" },
  },
  {
    id: 2,
    name: "Rohit",
    role: "Tester",
    active: false,
    salary: 40000,
    address: { city: "Mumbai", state: "MH" },
  },
  {
    id: 3,
    name: "Sneha",
    role: "Developer",
    active: true,
    salary: 65000,
    address: { city: "Bengaluru", state: "KA" },
  },
  {
    id: 4,
    name: "Priya",
    role: "Manager",
    active: false,
    salary: 90000,
    address: { city: "Delhi", state: "DL" },
  },
  {
    id: 5,
    name: "Karan",
    role: "Tester",
    active: true,
    salary: 42000,
    address: { city: "Ahmedabad", state: "GJ" },
  },
  {
    id: 6,
    name: "Neha",
    role: "HR",
    active: false,
    salary: 50000,
    address: { city: "Jaipur", state: "RJ" },
  },
  {
    id: 7,
    name: "Arjun",
    role: "Developer",
    active: false,
    salary: 70000,
    address: { city: "Hyderabad", state: "TS" },
  },
  {
    id: 8,
    name: "Pooja",
    role: "HR",
    active: true,
    salary: 52000,
    address: { city: "Indore", state: "MP" },
  },
  {
    id: 9,
    name: "Vikas",
    role: "Manager",
    active: false,
    salary: 88000,
    address: { city: "Chandigarh", state: "PB" },
  },
  {
    id: 10,
    name: "Anjali",
    role: "Tester",
    active: false,
    salary: 45000,
    address: { city: "Nagpur", state: "MH" },
  },
  {
    id: 11,
    name: "Rahul",
    role: "Developer",
    active: true,
    salary: 68000,
    address: { city: "Noida", state: "UP" },
  },
  {
    id: 12,
    name: "Meera",
    role: "HR",
    active: true,
    salary: null,
    address: { city: "Bhopal", state: "MP" },
  },
  {
    id: 13,
    name: "Suresh",
    role: "Developer",
    active: false,
    salary: 62000,
    address: { city: "Chennai", state: "TN" },
  },
  {
    id: 14,
    name: "Isha",
    role: "Tester",
    active: false,
    salary: 43000,
    address: { city: "Surat", state: "GJ" },
  },
  {
    id: 15,
    name: "Nikhil",
    role: "Manager",
    active: true,
    salary: 95000,
    address: { city: "Kolkata", state: "WB" },
  },
  {
    id: 16,
    name: "Kavya",
    role: "Developer",
    active: false,
    salary: 66000,
    address: { city: "Udaipur", state: "RJ" },
  },
  {
    id: 17,
    name: "Amit",
    role: "Tester",
    active: false,
    salary: 41000,
    address: { city: "Patna", state: "BR" },
  },
  {
    id: 18,
    name: "Riya",
    role: "HR",
    active: true,
    salary: 53000,
    address: { city: "Gwalior", state: "MP" },
  },
  {
    id: 19,
    name: "Deepak",
    role: "Developer",
    active: true,
    salary: 72000,
    address: { city: "Faridabad", state: "HR" },
  },
  {
    id: 20,
    name: "Simran",
    role: "Manager",
    active: false,
    salary: 98000,
    address: { city: "Gurgaon", state: "HR" },
  },
];



//----------filter method
const activeUsers = users.filter((user) => user.active); //this filters out the array to new array where users status is active, active = true.
console.log(activeUsers);
/*we use filter method to filter out some elements from array based on some conditions*/



/*
*Note: we use map method when we have to perform any operation on each element of array and create a new array out of that, this does not update the old array
*/
//----------map method
const userNames = activeUsers.map((user) => user.name); //this creates new array of extracted name property from active users
console.log(userNames);



//-----------reduce method
//for sum, avg and group

//SUM
/**
 * @param users - array of users
 * @returns total salary of all users
 */
const getTotalSalary = (users) => {
  return users.reduce((total, user) => total + (user.salary || 0), 0);
};
console.log(getTotalSalary(users));



//Average
/**
 * @param users - array of user objects with a salary property
 * @returns average salary of all users
 * 
 * Note: Demonstrates use of `reduce` with value, index, and array parameters.
 */
const getAvgSalary = (users) =>{
  return users.reduce((res, user, index, arr) => {
  
  res += user.salary;     // Keep adding salaries
  if (index === arr.length - 1) {     // If this is the last element, return the average
    return res / arr.length;
  }
  // Otherwise, return running total
  return res;
}, 0);
}
console.log(getAvgSalary(users));


//Grouping based on role
/**
 * @param users - array of user objects with `name` and `role` properties
 * @returns an object grouping users by their role
 * 
 * Note: reduce method is used to get a single value from an array by computing some operations ont each element of array
 */
const groupUser = (users) => {
  return users.reduce((group, user) => {
  // If role key does not exist, create an empty array
  if (!group[user.role]) {
    group[user.role] = [];
  }
  // Push user name into the array corresponding to their role
  group[user.role].push(user.name);
  // Return updated group object for next iteration
  return group;
}, {});
}
console.log(groupUser(users));




//--------chained operation
/**
 * @param users - array of user objects with `salary` and `active` properties
 * @returns total salary of all active users
 */
const getTotalSalaryActive = (users) => {
  return users
    .filter(user => user.active)           // keep only active users
    .map(user => user.salary || 0)         // extract salary (default 0 if missing)
    .reduce((total, salary) => total + salary, 0); // sum all salaries
};
console.log(getTotalSalaryActive(users));




//--------object operations:
//1.1 Access object properties
console.log(users[0].name);
console.log(users[2].address.city);

//1.2 Update a property

const updatedUser = { ...users[0] }; //creates shallow copy using spread operator
updatedUser.name = "Aman2";
console.log(updatedUser.name); //Aman2
console.log(users[0].name); //Aman

delete updatedUser.name;
console.log(updatedUser.name);


//1.3 Add a new property
updatedUser.nickname = "Baman"; //adds new propertry nickname to new updatedUser
console.log(updatedUser.nickname); //Baman
console.log(users[0].nickname); //undefined

//1.4 Copy an object using spread operator
const userCopy = { ...users[10] }; //spread operator makes shallow copy
userCopy.salary = 0;
console.log(userCopy.salary); //0
console.log(users[10].salary); //68000
//this shows the original object is not changed with spread operator copy
