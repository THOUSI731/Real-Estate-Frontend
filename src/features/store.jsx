import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import propertySlice from "./properties/propertySlice";
import propertyDetailSlice from "./properties/propertyDetailSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    property: propertySlice,
    propertyDetails: propertyDetailSlice,
  },
});