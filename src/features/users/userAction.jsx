import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_BASE_URL } from "../../utils/baseapi";
import { api } from "../../common/axiosPrivate";

export const listUsers = createAsyncThunk(
  "listUsers",
  async (args, { rejectWithValue }) => {
    let endpoint = "tenants/";
    try {
      const response = await api.get(ADMIN_BASE_URL + endpoint);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
