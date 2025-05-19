import axiosInstance from "./axiosInstance"
import Cookies from "js-cookie"

export const getUsers = async () => {
    try {
        const token = Cookies.get("token");
        const response = await axiosInstance.get('/users', { 
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error.response?.data || error.message);
        throw error;
    }
}

export const getUserById = async (id) => {
    try {
        const response = await axiosInstance.get(`/users/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } } )
        return response.data
    } catch (error) {
        console.error('Error al obtener el usuario:', error.response?.data || error.message)
        throw error
    }
}
