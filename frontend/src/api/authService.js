import axiosInstance from "./axiosInstance"
import Cookies from "js-cookie"

export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/auth/login', { email, password })
        return response.data
    } catch (error) {
        console.error('Error de inicio de sesión:', error.response?.data || error.message)
        throw error
    }
}

export const createUser = async (user) => {
    try {
        const response = await axiosInstance.post('/auth/register', user)
        return response.data
    } catch (error) {
        console.error('Error al crear el usuario:', error.response?.data || error.message)
        throw error
    }
}

export const getLoggedUser = async () => {
    try {
        const response = await axiosInstance.get('/auth/me', { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al obtener el perfil:', error.response?.data || error.message)
        throw error
    }
}