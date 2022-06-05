import axios from "axios";

const url = "https://localhost:7091";
const api = axios.create({ baseURL: url });

const Api = {
  login: ({ email, password }) =>
    api
      .post("/user/login", { email, password })
      .then((response) => {
        return { ...response.data };
      })
      .catch((error) => {
        return error;
      }),

  register: ({ email, password, lastname, name }) =>
    api
      .post("/user/register", { email, password, lastname, name })
      .then((response) => {
        return { ...response.data };
      })
      .catch((error) => {
        return error;
      }),
};

export default Api;
