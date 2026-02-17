import axiosInstance from "./axiosInstance.js";

export async function fetchUsers() {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
}