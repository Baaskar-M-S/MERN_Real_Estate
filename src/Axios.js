import axios from "axios";
// Fetch all items
export const GetAll = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching all data:", error);
  }
};

// Fetch item by ID
export const GetById = async (url, id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by ID:", error);
  }
};

// Create new item
export const CreateData = async (url, data, headers = {}) => {
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
  }
};

// Update item by ID
export const UpdateById = async (url, id, data, headers = {}) => {
  try {
    const response = await axios.put(`${url}/${id}`, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error updating data by ID:", error);
  }
};

// Delete item by ID
export const DeleteById = async (url, id, headers = {}) => {
  try {
    const response = await axios.delete(`${url}/${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Error deleting data by ID:", error);
  }
};
