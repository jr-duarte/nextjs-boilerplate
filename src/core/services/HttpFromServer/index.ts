import axios from 'axios';
import { parseCookies } from 'nookies';

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

  return Http;
}

export default HttpFromServer;
