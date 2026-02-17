import chalk from "chalk";

import getCurrentTime, { generateId, capitalize } from "./utils.js";
import { fetchUsers } from "./api.js";

async function main() {
  console.log(chalk.blue("App started at:"), getCurrentTime());


  const users = await fetchUsers();
  users.forEach(user => {
     console.log(chalk.yellow("User name: "), capitalize(user.name), chalk.green(" Id: "), generateId());
  });

}

main();