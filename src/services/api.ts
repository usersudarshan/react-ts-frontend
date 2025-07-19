import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL,
  withCredentials: true, // Important for cookies and sessions
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
