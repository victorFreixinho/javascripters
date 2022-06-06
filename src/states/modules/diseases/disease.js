import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const getDiseases = createAsyncThunk("diseases/list", async () => {
  const diseases = await api.getDiseases();
  return diseases;
});

const diseasesSlice = createSlice({
  name: "diseases",
  initialState: {
    diseases: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getDiseases.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [getDiseases.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
    [getDiseases.fulfilled]: (state, { payload }) => {
      state.diseases = payload.diseases;
      state.error = null;
      state.loading = false;
    },
  },
});

const { reducer } = diseasesSlice;
export default reducer;
