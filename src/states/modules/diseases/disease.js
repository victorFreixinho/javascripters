import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const getDiseases = createAsyncThunk("diseases/list", async () => {
  const diseases = await api.getDiseases();
  return diseases;
});

export const getOccurrences = createAsyncThunk(
  "diseases/occurrences",
  async (payload) => {
    const { states, diseases } = payload;
    const occurrences = await api.getOccurrences({ states, diseases });
    return occurrences;
  }
);

const diseasesSlice = createSlice({
  name: "diseases",
  initialState: {
    diseases: [],
    ocurrences: [],
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
    [getOccurrences.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [getOccurrences.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    },
    [getOccurrences.fulfilled]: (state, { payload }) => {
      state.occurrences = payload.occurrences;
      state.error = null;
      state.loading = false;
    },
  },
});

const { reducer } = diseasesSlice;
export default reducer;
