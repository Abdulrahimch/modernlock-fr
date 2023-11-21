import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import axios from './axiosConfig';

const loginWithCookies = async (): Promise<AuthApiData> => {
  return await axios.get(`/api/v1/auth`)
    .then((res) => res.data)
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default loginWithCookies;