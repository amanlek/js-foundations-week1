import chalk from "chalk";

import getCurrentTime, { generateId, capitalize } from "./utils.js";  //imports default getCurrentTime and other functions from utils.js
import { fetchUsers } from "./api.js";  //imports fetchUsers funtion from api.js

async function main() {
  //prints Current time
  console.log(chalk.blue("App started at:"), getCurrentTime());

  const users = await fetchUsers();
  users.forEach(user => {
    //prints each user's Name and Id
     console.log(chalk.yellow("User name: "), capitalize(user.name), chalk.green("  Id: "), generateId());   
  });
}

main();