import axios from "axios";

const url = "//localhost:7091";
const api = axios.create({ baseURL: url });

const Api = {
  login: ({ email, password }) =>
    api
      .post("/users/login", { email, password })
      .then((response) => {
        return { ...response.data };
      })
      .catch((error) => {
        return error;
      }),

  register: ({ payload }) =>
    api
      .post("/users/register", { payload })
      .then((response) => {
        return { ...response.data };
      })
      .catch((error) => {
        return error;
      }),
};

export default Api;
