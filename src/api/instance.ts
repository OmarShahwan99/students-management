import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import toast from "react-hot-toast";
import { AUTH_TOKEN_KEY } from "../utils/constants";

export const baseURL = "https://taxiapp.easybooks.me:8283";

const httpClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(
  function (config) {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response) {
      const { status, data }: { status: number; data: any } = error.response;

      switch (status) {
        case 400:
          console.log("400 Bad Request:", data);
          break;
        case 401:
          console.log("401 Unauthorized:", data);
          break;
        case 403:
          console.log("403 Forbidden:", data);
          break;
        case 404:
          console.log("404 Not Found:", data);
          break;
        case 422:
          console.log("Unprocessable Content", data);
          break;
        case 500:
          console.log("500 Internal Server Error:", data);
          break;
        default:
          console.log(`Unhandled status code ${status}:`, data);
          break;
      }

      if (typeof data === "string") {
        toast.error(data);
      } else if (typeof data === "object") {
        Object.keys(data).forEach((key) => {
          toast.error(data[key]);
        });
      }

      return Promise.reject(error);
    } else if (error.request) {
      console.log("No response received:", error.request);
    } else {
      console.log("Error during request setup:", error.message);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
