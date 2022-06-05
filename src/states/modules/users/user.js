import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const register = createAsyncThunk("user/register", async (payload) => {
  const { history, ...formData } = payload;
  console.log("FormData: ", formData);
  const user = await api.register(formData);
  return { ...user, history };
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    name: null,
    email: null,
    lastName: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [register.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
    [register.fulfilled]: (state, { payload }) => {
      console.log("payload: ", payload);
      state.email = payload.email;
      state.userId = payload.userId;
      state.name = payload.name;
      state.lastName = payload.lastName;
      state.error = null;
      state.loading = false;
      payload.history.push("/login");
    },
  },
});

const { reducer } = userSlice;
export default reducer;
