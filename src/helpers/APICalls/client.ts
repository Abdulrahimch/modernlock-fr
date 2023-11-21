import axios from './axiosConfig';
import { AuthApiData, GetClientsApiData } from '../../interface/AuthApiData';
import { Client } from '../../interface/Client';

export const createClient = async (inputs: Client): Promise<AuthApiData> => {
    return await axios.post('/api/v1/client', inputs)
        .then((res) => res.data)
        .catch(() => ({
            error: { message: 'Unable to connect to server. Please try again' }
        }))
};

export const getClients = async (pageNo: number): Promise<GetClientsApiData> => {
    return await axios.get(`/api/v1/client`, { params: { pageNo } })
        .then((res) => res.data)
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }))
};

export const deleteClient = async (id: string) => {
    return await axios.delete(`/api/v1/client/${id}`)
        .then((res) => res.data)
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }));
};

export const updateClient = async (id: string, inputs: Client) => {
    return await axios.patch(`/api/v1/client/${id}`, inputs)
        .then((res) => res.data)
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }));
};

export const getClient = async (id: string) => {
    return await axios.get(`/api/v1/client${id}`)
        .then((res) => res.data)
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }));
};

export const searchClient = async (params: any) => {
    return await axios.get(`/api/v1/client/search`,{ 
        params: { ...params }
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

export const searchMyClient = async (clientNo: any) => {
    return await axios.get(`/api/v1/client/private/search`,{ 
        params: { clientNo }
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

