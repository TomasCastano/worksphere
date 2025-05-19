import axiosInstance from "./axiosInstance"

export const getReservations = async () => {
    try {
        const response = await axiosInstance.get('/bookings')
        return response.data
    } catch (error) {
        console.error('Error al obtener las reservas:', error.response?.data || error.message)
        throw error
    }
}
