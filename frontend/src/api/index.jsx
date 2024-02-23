import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-3-9xuz.onrender.com/api",
});
export default api;
