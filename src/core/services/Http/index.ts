import axios from 'axios';
import { parseCookies } from 'nookies';

const Http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const { JWT_TOKEN } = parseCookies();

if (JWT_TOKEN) {
  Http.defaults.headers.common = {
    Authorization: `Bearer ${JWT_TOKEN}`,
  };
}

export default Http;
