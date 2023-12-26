import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_BASE_URL } from "../../utils/baseapi";
import { api } from "../../common/axiosPrivate";

export const getProperty = createAsyncThunk(
  "getProperty",
  async (args, { rejectWithValue }) => {
    const { id,search } = args;
    let endpoint = `property/${id}`;
    if (search) {
      endpoint += `?search=${search}`;
    }
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
