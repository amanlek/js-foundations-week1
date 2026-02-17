import axios from "axios";

export async function fetchUsers() {   //export fetchUsers function
try {
    const response = await axios.get(    //get request using axios
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {  //handles errors
    console.error("Error fetching users:", error.message);
  }
}