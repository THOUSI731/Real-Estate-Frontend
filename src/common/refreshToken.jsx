import axios from "axios";
import { axiosPublic } from "./axiosPublic";
import mem from "mem";

const refreshTokenFn = async () => {
  const authTokens = JSON.parse(localStorage.getItem("authTokens") ? localStorage.getItem("authTokens") : null);
  try {
    const response = await axios.post("/token/refresh/", {
      refresh: authTokens?.refresh,
    });

    if (!response.data?.access) {
      localStorage.removeItem("authTokens");
    }

    localStorage.setItem("authTokens", JSON.stringify(response.data));

    return authTokens;
  } catch (error) {
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user");
  }
};
const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});