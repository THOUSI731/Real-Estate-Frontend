import { createSlice } from "@reduxjs/toolkit";
import { getProperty } from "./propertyDetailAction";

const initialState = {
  loading: false,
  propertyDetails: {},
  error: null,
};

const propertyDetailSlice = createSlice({
  name: "propertyDetailSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProperty.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.propertyDetails = payload;
      })
      .addCase(getProperty.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default propertyDetailSlice.reducer;
