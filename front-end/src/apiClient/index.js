import axios from "axios";
import { getAuthToken } from "../helper/helper";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding tokens or logging
apiClient.interceptors.request.use(
  (config) => {
    // You can add authentication tokens if needed
    // const token = localStorage.getItem("authToken");
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
