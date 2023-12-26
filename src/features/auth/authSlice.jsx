import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";
import { jwtDecode } from "jwt-decode";

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success=true;
      })
      .addCase(registerUser.rejected,(state,{payload})=>{
        state.loading = false;
        state.error = payload;
      })
    builder
      .addCase(userLogin.pending,(state)=>{
        state.loading = true;
        state.error=null;
      })
      .addCase(userLogin.fulfilled,(state,{payload})=>{
        console.log(payload);
        state.loading=false;
        state.error=null;
        state.userInfo=jwtDecode(payload.access);
        state.userToken=payload
        localStorage.clear()
        localStorage.setItem("authTokens",JSON.stringify(payload));
        console.log(JSON.parse(localStorage.getItem("authTokens")));
      })
      .addCase(userLogin.rejected,(state,{payload})=>{
        state.loading=false;
        state.error=payload;
      })
  },
});

export default authSlice.reducer