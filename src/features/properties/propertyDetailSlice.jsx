import { createSlice } from "@reduxjs/toolkit";
import { getProperty } from "./propertyDetailAction";
import { createProperty } from "./propertyActions";

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
    builder
      .addCase(createProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProperty.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.propertyDetails.property_units.push(payload);
      })
      .addCase(createProperty.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default propertyDetailSlice.reducer;
