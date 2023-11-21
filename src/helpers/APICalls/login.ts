import axios from './axiosConfig';
import { AuthApiData } from '../../interface/AuthApiData';

const login = async (email: string, password: string): Promise<AuthApiData> => {
    const fetchData = { email, password };
    return await axios.post(`/api/v1/auth/login`, fetchData)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' }
        }))
};

interface Password {
    oldPassword: string;
    newPassword: string
}

export const changePasswordApi = async (passwordInputs: Password ) => {
    return await axios.patch(`/api/auth/change-password`, passwordInputs)
        .then((res) => res.data)
        .catch((error) => error.response.data);
};

export default login;

  