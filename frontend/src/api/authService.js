import axiosInstance from "./axiosInstance"

export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/auth/login', { email, password })
        return response.data
    } catch (error) {
        console.error('Error de inicio de sesión:', error.response?.data || error.message)
        throw error
    }
}
