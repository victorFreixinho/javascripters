import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const register = createAsyncThunk("user/register", async (payload) => {
  const { callback, ...formData } = payload;
  console.log("FormData: ", formData);
  const user = await api
    .register(formData)
    .then((response) => {
      if (callback) callback(true);
      return { ...response.data };
    })
    .catch((error) => {
      if (callback) callback(false);
      return error;
    });
  return { ...user };
});

export const getUsers = createAsyncThunk("user/list", async () => {
  const userList = (await api.getUsers()).data;
  return userList;
});

export const deleteUser = createAsyncThunk("user/delete", async (user) => {
  const removedUser = (await api.deleteUser(user)).config.data;
  return removedUser;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    userId: null,
    name: null,
    email: null,
    lastName: null,
    users: [],
    removedUser: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
    },

    [getUsers.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload ? payload : [];
      state.error = null;
      state.loading = false;
    },

    [deleteUser.pending]: (state) => {
      state.loading = true;
      state.removedUser = null;
      state.error = null;
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.removedUser = null;
      state.error = payload.error;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.removedUser = payload ? { data: payload } : null;
      state.error = null;
      state.loading = false;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
