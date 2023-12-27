import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import propertySlice from "./properties/propertySlice";
import propertyDetailSlice from "./properties/propertyDetailSlice";
import unitDetailSlice from "./units/unitDetailSlice";
import userSlice from "./users/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    property: propertySlice,
    propertyDetails: propertyDetailSlice,
    unitDetails:unitDetailSlice,
    users:userSlice
  },
});