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


export async function createUser(userData) {
  try {
    const response = await axiosInstance.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
}

/* PUT user (update full data) */
export async function updateUser(userId, updatedData) {
  try {
    const response = await axiosInstance.put(`/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
}

/* DELETE user */
export async function deleteUser(userId) {
  try {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
}