import axios from "axios";

const url = "https://localhost:7091";
const api = axios.create({ baseURL: url });

const Api = {
  // session

  login: ({ email, password }) =>
    api
      .post("/user/login", { email, password })
      .then((response) => {
        return { ...response.data };
      })
      .catch((error) => {
        return error;
      }),

  //users

  register: ({ email, password, lastname, name }) =>
    api
      .post("/user/register", { email, password, lastname, name })
      .then((response) => {
        return { ...response.data };
      })
      .catch((error) => {
        return error;
      }),

  //diseases

  getDiseases: () => {
    api
      .get("/disease/list")
      .then((response) => {
        console.log("ResponseGet : ", response);
        return { ...response.data };
      })
      .catch((error) => error);
  },

  getOccurrences: ({ states, diseases }) => {
    api
      .post("/diseases/occurrences", { states, diseases })
      .then((response) => {
        return { ...response.data };
      })
      .catch((error) => {
        return error;
      });
  },

  deleteDisease: (disease) => {
    api
      .post("/disease/delete", disease)
      .then((response) => ({ ...response.data }))
      .catch((error) => error);
  },

  createDisease: (disease) => {
    api
      .post("/disease/insert", disease)
      .then((response) => ({ ...response.data }))
      .catch((error) => error);
  },

  // setData : (data) =>{
  //   api.post("rota",data)
  // }
};

export default Api;
