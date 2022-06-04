import axios from "axios";

const url = "//localhost:4000/api",
  api = axios.create({ baseURL: url });

export default api;
