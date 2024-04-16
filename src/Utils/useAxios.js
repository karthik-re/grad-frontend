import axios from "axios";
import { jwtDecode } from "jwt-decode";

const baseURL = "http://127.0.0.1:8080";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    const { exp } = jwtDecode(authToken);

    if (Date.now() >= exp * 1000) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("xsrfToken");
      window.location.href = "/login";
    }

    config.headers.Authorization = authToken;
  }

  const xsrfToken = localStorage.getItem("xsrfToken");
  if (xsrfToken) {
    config.headers["X-XSRF-TOKEN"] = xsrfToken;
  }

  return config;
});

export default axiosInstance;
