import { PATH } from '@Routes/paths';
import axios from 'axios';
import { destroyCookie, parseCookies } from 'nookies';

function HttpFromServer(ctx?: any) {
  const { JWT_TOKEN } = parseCookies(ctx);

  const Http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  if (JWT_TOKEN) {
    Http.defaults.headers.common = {
      Authorization: `Bearer ${JWT_TOKEN}`,
    };
  }

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

  return Http;
}

export default HttpFromServer;
