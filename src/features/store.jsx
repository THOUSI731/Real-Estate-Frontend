import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import propertySlice from "./properties/propertySlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        property:propertySlice,
    }
})