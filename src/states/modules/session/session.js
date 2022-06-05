import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const login = createAsyncThunk("session/login", async (payload) => {
  const session = await api.login(payload);
  return session;
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
    },
  },
});

const { reducer } = sessionSlice;
export default reducer;
