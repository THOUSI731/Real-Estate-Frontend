import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../common/axiosPublic";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (values, { rejectWithValue }) => {
    const {values:formData} = values;
    try {
      const response = await axios.post(
        "http://localhost:8000/accounts/register/",
        formData
      );
      console.log(response.data);
      if (response.status === 201) {
        alert("User Registered Successfully")
      }
    } catch (error) {
        console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email,password);
    try {
      const response = await axiosPublic.post(
        "http://localhost:8000/accounts/login/",
        { email, password }
      );
      // store user's token in local storage
      localStorage.setItem("authTokens", response.data);
      return response.data;
    } catch (error) {
        console.log(error);
        // Return Custom Error from Backend
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.response);
      }
    }
  }
);
