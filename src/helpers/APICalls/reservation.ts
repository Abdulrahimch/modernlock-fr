import axios from './axiosConfig';
import { PropertyApiData } from '../../interface/Property';
import { ReservationApiData } from '../../interface/Reservation';

export const postReservation = async (propertyId: string, inputs: any): Promise<ReservationApiData> => {
    return await axios.post(`/api/v1/reservations/${propertyId}`, inputs)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' }
        }))
};

export const getReservations = async (propertyId: string): Promise<ReservationApiData> => {
    return await axios.get(`/api/v1/reservations/${propertyId}`)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' }
        }))
};

