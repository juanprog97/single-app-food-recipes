import axios, { AxiosRequestConfig } from "axios";

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    const newHeaders = {
      "X-RapidAPI-Key": import.meta.env.VITE_X_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_X_RAPID_HOST,
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request: any) => {
    if (request.url?.includes("assets")) return request;
    return updateHeader(request);
  });
};
