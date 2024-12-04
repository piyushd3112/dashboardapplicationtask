import axios from "axios";

export const fetchUsers = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users.')
  } catch (error) {
    throw new Error("Unable to fetch users !!");
  }
};
