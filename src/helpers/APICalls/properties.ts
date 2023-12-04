import axios from './axiosConfig';
import { PropertyApiData } from '../../interface/Property';

export const getProperties = async (): Promise<PropertyApiData> => {
    return await axios.get(`/api/v1/properties`)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' }
        }))
};