import axios from 'axios';
import { BASE_URL } from './baseUrl';

export default axios.create(
    {
        baseURL: `${BASE_URL}`,
        withCredentials: true,
    },
);
