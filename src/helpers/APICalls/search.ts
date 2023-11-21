import axios from './axiosConfig';

export const searchApi = async (params: any) => {

    return await axios.get('/api/v1/search', {
        params: {
            ...params
        }
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};
