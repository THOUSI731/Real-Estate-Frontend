import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_BASE_URL } from "../../utils/baseapi";
import { api } from "../../common/axiosPrivate";

export const listProperties = createAsyncThunk(
    "listProperties",
    async (args,{rejectWithValue}) => {
        const {search} = args;
        let endpoint = "property/"
        if (search){
            endpoint += `?search=${search}`
        }
        try{
            const response = await api.get(ADMIN_BASE_URL+endpoint)
            return response.data
        }catch (error){
            return rejectWithValue(error)
        }
    }
);
export const createProperty = createAsyncThunk(
  "createProperty",
  async (args, { rejectWithValue }) => {
    const {values,setOpenForm} = args;
    console.log(values);
    try {
      const response = await api.post(ADMIN_BASE_URL+"property/",values ,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response.status === 201){
        setOpenForm(false)
      }
      return response.data;
    } catch (error) {
        console.log(error);
      return rejectWithValue(error);
    }
  }
);