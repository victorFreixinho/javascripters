import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api";

export const getDiseases = createAsyncThunk("diseases/list", async () => {
  const diseasesList = (await api.getDiseases()).data;
  return diseasesList;
});

export const getOccurrences = createAsyncThunk(
  "diseases/occurrences",
  async (payload) => {
    const { selectedStates, selectedDiseases } = payload;
    const occurrences = (
      await api.getOccurrences({
        selectedStates,
        selectedDiseases,
      })
    ).data;
    console.log("response occurrences: ", occurrences);
    return occurrences;
  }
);

export const deleteDisease = createAsyncThunk(
  "diseases/delete",
  async (disease) => {
    const removedDisease = (await api.deleteDisease(disease)).config.data;
    return removedDisease;
  }
);

export const setCsvData = createAsyncThunk(
  "diseases/upload",
  async (payload) => await api.setCsvData(payload)
);

export const createDisease = createAsyncThunk(
  "diseases/create",
  async (disease) => {
    await api
      .createDisease(disease)
      .then((response) => ({ response, disease }))
      .catch((error) => error);
  }
);

const diseasesSlice = createSlice({
  name: "diseases",
  initialState: {
    diseases: [],
    occurrences: [],
    removedDisease: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getDiseases.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getDiseases.rejected]: (state, error) => {
      state.loading = false;
      state.error = error;
    },
    [getDiseases.fulfilled]: (state, { payload }) => {
      state.diseases = payload ? payload : [];
      state.error = null;
      state.loading = false;
    },

    [getOccurrences.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getOccurrences.rejected]: (state, error) => {
      state.loading = false;
      state.error = error;
    },
    [getOccurrences.fulfilled]: (state, { payload }) => {
      state.occurrences = payload && payload ? payload : [];
      state.error = null;
      state.loading = false;
    },

    [deleteDisease.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteDisease.rejected]: (state, error) => {
      state.loading = false;
      state.error = error;
    },
    [deleteDisease.fulfilled]: (state, { payload }) => {
      console.log("Response: ", payload);
      state.removedDisease = payload;
      state.error = null;
      state.loading = false;
    },

    [setCsvData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [setCsvData.rejected]: (state, error) => {
      state.loading = false;
      state.error = error;
    },
    [setCsvData.fulfilled]: (state, response) => {
      console.log("Response: ", response);
      state.error = null;
      state.loading = false;
    },

    [createDisease.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [createDisease.rejected]: (state, error) => {
      state.loading = false;
      state.error = error;
    },
    [createDisease.fulfilled]: (state, { response, disease }) => {
      console.log("Response: ", response);
      state.error = null;
      state.loading = false;
      state.diseases.push(disease);
    },
  },
});

const { reducer } = diseasesSlice;
export default reducer;
