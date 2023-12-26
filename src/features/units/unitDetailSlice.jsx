import { createSlice } from "@reduxjs/toolkit";
import { getUnit } from "./unitDetailAction";

const initialState = {
  loading: false,
  unitDetails: {},
  error: null,
};

const unitDetailSlice = createSlice({
  name: "unitDetailSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUnit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUnit.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.unitDetails = payload;
      })
      .addCase(getUnit.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default unitDetailSlice.reducer;
