import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://127.0.0.1:8000/accounts/",
  headers: {
    "Content-Type": "application/json",
  },
});