import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers: { Accept: "application/json" },
  withCredentials: true,
});

export default client;
