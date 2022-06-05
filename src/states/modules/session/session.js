import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const login = createAsyncThunk("session/login", async (payload) => {
  const { email, password, history } = payload;
  const session = await api.login({ email, password });
  console.log("Resposta: ", session);
  return { ...session, history };
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
  reducers: {},
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
      state.token = payload.token;
      state.userId = payload.userId;
      state.error = null;
      state.loading = false;
      state.signed = true;
      console.log("Signed: ", state.signed);
      payload.history.push("/");
    },
  },
});

const { reducer } = sessionSlice;
export default reducer;
