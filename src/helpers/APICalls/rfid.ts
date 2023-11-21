import axios from './axiosConfig';

export const createrfids = async (inputs: FormData) => {
    return await axios.post(`/api/v1/rfid`, inputs)
        .then((res) => res.data)
        .catch((error) => error.response.data);
};

export const scanrfids = async (inputs: FormData) => {
    return await axios.post(`/api/v1/rfid/scan`, inputs)
        .then((res) => res.data)
        .catch((error) => error.response.data);
};
