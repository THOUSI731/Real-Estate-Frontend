import axios from "axios";

import { memoizedRefreshToken } from "./refreshToken";

axios.defaults.baseURL = "http://localhost:3333/api";

axios.interceptors.request.use(
  async (config) => {
    const authTokens = JSON.parse(localStorage.getItem("authTokens"));

    if (authTokens?.access) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${authTokens?.access}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result?.access) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.access}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const api = axios;
