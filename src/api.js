import axios from "axios";

const url = "//localhost:4000/api";
const api = axios.create({ baseURL: url });

const Api = {
  login: ({ email, password }) =>
    api
      .post("/login", { email, password })
      .then((response) => {
        return { ...response.data };
      })
      .catch((error) => {
        return error;
      }),
};

export default Api;
