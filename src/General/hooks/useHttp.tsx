import {OutgoingHttpHeaders} from 'node:http2';
import axios, {AxiosInstance} from 'axios';
import {useAuthContext} from '../context';

export function useHttp(headers?: OutgoingHttpHeaders): AxiosInstance {
  let baseUrl = process.env.API_BASE_URL;
  const {token} = useAuthContext();

  return axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });
}
