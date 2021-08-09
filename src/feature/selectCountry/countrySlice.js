import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../../util/fetchData";

export const getExchangeRate = createAsyncThunk(
  "country/getExchangeRate",
  async (mode) => {
    const response = await fetchData(mode);

    return response;
  },
);

const initialState = {
  data: null,
  error: null,
  status: "idle",
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getExchangeRate.pending]: (state) => {
      if (state.status === "idle") {
        state.status = "pending";
      }
    },
    [getExchangeRate.fulfilled]: (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.data = action.payload;
      }
    },
    [getExchangeRate.rejected]: (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.error = action.error.message || null;
      }
    },
  },
})

export default countrySlice.reducer
