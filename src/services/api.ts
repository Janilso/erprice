import axios, { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/',
  timeout: 60000,
});

async function configHandler(config: InternalAxiosRequestConfig) {
  return config;
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) =>
  configHandler(config)
);

export default api;
