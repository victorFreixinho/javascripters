import axios from "axios";

const url = "https://localhost:44330";
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

  getUsers: () => api.get("/user/list"),

  deleteUser: (user) => {
    console.log("user removed: ", user);
    return api.post("/user/delete", user);
  },

  //diseases

  getDiseases: () => api.get("/disease/list"),

  getOccurrences: ({ selectedStates, selectedDiseases }) =>
    api.post(
      "/disease/mapfilter",
      { selectedStates: selectedStates, selectedDiseases: selectedDiseases },
      { headers: { "Content-Type": "application/json" } }
    ),

  deleteDisease: (disease) => {
    console.log("Disease removed: ", disease);
    return api.post("/disease/delete", disease);
  },

  setCsvData: (payload) => {
    console.log(payload);
    api
      .post(
        "/disease/upload",
        { payload: payload },
        { headers: { "Content-Type": "text/tab-separated-values" } }
      )
      .then((response) => ({ ...response.data }))
      .catch((error) => error);
  },

  createDisease: (disease) => api.post("/disease/insert", disease),

  // setData : (data) =>{
  //   api.post("rota",data)
  // }
};

export default Api;
