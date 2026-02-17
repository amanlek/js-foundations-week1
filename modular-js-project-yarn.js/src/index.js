import chalk from "chalk";

import getCurrentTime, { generateId, capitalize } from "./utils.js";  //imports default getCurrentTime and other functions from utils.js
import { fetchUsers, createUser, updateUser, deleteUser } from "./api.js";  //imports fetchUsers funtion from api.js

async function main() {
  //prints Current time
  console.log(chalk.blue("App started at:"), getCurrentTime());

  const users = await fetchUsers();
  users.forEach(user => {
    //prints each user's Name and Id
     console.log(chalk.yellow("User name: "), capitalize(user.name), chalk.green("  Id: "), generateId());   
  });

  /*UPDATE*/
  const newUser = await createUser({
      name: "Aman",
      email: "aman@gmail.com"
    });
    console.log(chalk.yellow("User created:"), newUser);

    /* PUT */
    const updatedUser = await updateUser(10, {
      name: "Updated Aman",
      email: "aman2@gmail.com"
    });
    console.log(chalk.blue("User updated:"), updatedUser);
    console.log(users[0].name);

    /* DELETE */
    await deleteUser(1);
    console.log(chalk.red("User deleted successfully"));

}

main();