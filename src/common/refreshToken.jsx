import { axiosPublic } from "./axiosPublic";
import mem from "mem";

const refreshTokenFn = async () => {
  const authTokens = JSON.parse(localStorage.getItem("authTokens"));

  try {
    const response = await axiosPublic.post("/token/refresh/", {
      refreshToken: authTokens?.refreshToken,
    });

    const { authTokens } = response.data;

    if (!authTokens?.accessToken) {
      localStorage.removeItem("authTokens");
      localStorage.removeItem("user");
    }

    localStorage.setItem("authTokens", JSON.stringify(authTokens));

    return authTokens;
  } catch (error) {
    localStorage.removeItem("session");
    localStorage.removeItem("user");
  }
};
const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});