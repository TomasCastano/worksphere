import axiosInstance from "./axiosInstance"
import Cookies from "js-cookie"

export const getSpaces = async () => {
    try {
        const response = await axiosInstance.get('/spaces', { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al obtener los espacios:', error.response?.data || error.message)
        throw error
    }
}

export const getSpaceById = async (id) => {
    try {
        const response = await axiosInstance.get(`/spaces/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al obtener el espacio:', error.response?.data || error.message)
        throw error
    }
}

export const createSpace = async (space) => {
    try {
        const response = await axiosInstance.post('/spaces', space, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al crear el espacio:', error.response?.data || error.message)
        throw error
    }
}

export const updateSpace = async (id, space) => {
    try {
        const response = await axiosInstance.put(`/spaces/${id}`, space, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al actualizar el espacio:', error.response?.data || error.message)
        throw error
    }
}

export const deleteSpace = async (id) => {
    try {
        const response = await axiosInstance.delete(`/spaces/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al eliminar el espacio:', error.response?.data || error.message)
        throw error
    }
}