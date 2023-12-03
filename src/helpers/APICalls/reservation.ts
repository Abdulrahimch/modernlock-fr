import axios from './axiosConfig';
import { PropertyApiData } from '../../interface/Property';

export const postReservation = async (propertyId: string, name: string, checkin: string, checkout: string): Promise<PropertyApiData> => {
    
    return await axios.post(`/api/v1/reservations${propertyId}`, { name, checkin, checkout })
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' }
        }))
};