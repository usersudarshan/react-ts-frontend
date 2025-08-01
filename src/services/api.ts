import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

console.log(`baseURL: ${baseURL}`);

export const api = axios.create({
  baseURL: "https://user-movie-node-backend.onrender.com",
  withCredentials: false, // Important for cookies and sessions
  headers: {
    "Content-Type": "application/json",
  },
});



export const setAuthToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
