/* eslint-disable no-param-reassign */
import { PATH } from '@Routes/paths';
import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';

const Http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add a request interceptor
Http.interceptors.request.use(
  (config) => {
    const { JWT_TOKEN } = parseCookies();
    if (JWT_TOKEN) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${JWT_TOKEN}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
Http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      destroyCookie(null, 'JWT_TOKEN', {
        path: '/',
      });
      window.location.href = PATH.notloggedArea.login;
    }
    return Promise.reject(error);
  },
);

export default Http;
