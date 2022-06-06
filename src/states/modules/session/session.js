import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const login = createAsyncThunk("session/login", async (payload) => {
  const { email, password, history } = payload;
  const session = await api
    .login({ email, password })
    .then((response) => {
      history.push("/");
      return { ...response.data, signed: true };
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
  return { ...session };
});

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    userId: null,
    signed: false,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userId = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.signed = false;
    },
  },
  extraReducers: {
    [login.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.signed = false;
      state.error = payload.error;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload?.token;
      state.userId = payload?.userId;
      state.error = null;
      state.loading = false;
      state.signed = payload?.signed ?? false;
    },
  },
});

export const logoutAction = sessionSlice.actions.logout;

const { reducer } = sessionSlice;
export default reducer;
