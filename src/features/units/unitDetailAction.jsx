import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_BASE_URL } from "../../utils/baseapi";
import { api } from "../../common/axiosPrivate";

export const getUnit = createAsyncThunk(
  "getUnit",
  async (args, { rejectWithValue }) => {
    const { id,unit_id } = args;
    let endpoint = `property/${id}/unit/${unit_id}`;
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
