import { createSlice } from "@reduxjs/toolkit";
import { createProperty, listProperties } from "./propertyActions";

const initialState = {
  loading: false,
  property: [],
  error: null,
  success: false, // for monitoring creation of property
  message:null // for display success message
};

const propertySlice = createSlice({
  name: "propertySlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(listProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(listProperties.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.property = payload;
      })
      .addCase(listProperties.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
    builder
      .addCase(createProperty.pending, (state) => {
        state.loading = true;
        state.error=null;
      })
      .addCase(createProperty.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.property.property.push(payload);
        state.error = null;
        state.message = "Property Created Successfully"
      })
      .addCase(createProperty.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default propertySlice.reducer;
