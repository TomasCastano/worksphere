import axiosInstance from "./axiosInstance"
import Cookies from "js-cookie"

export const getUsers = async () => {
    try {
        const response = await axiosInstance.get('/users', { headers: { Authorization: `Bearer ${Cookies.get("token")}` } });
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

export const createUser = async (user) => {
    try {
        const response = await axiosInstance.post('/users', user, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al crear el usuario:', error.response?.data || error.message)
        throw error
    }
}

export const updateUser = async (id, user) => {
    try {
        const response = await axiosInstance.put(`/users/${id}`, user, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al actualizar el usuario:', error.response?.data || error.message)
        throw error
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await axiosInstance.delete(`/users/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al eliminar el usuario:', error.response?.data || error.message)
        throw error
    }
}
