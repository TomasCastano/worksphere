import axiosInstance from "./axiosInstance"
import Cookies from "js-cookie"

export const getBookings = async () => {
    try {
        const response = await axiosInstance.get('/bookings', { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al obtener las reservas:', error.response?.data || error.message)
        throw error
    }
}

export const getBookingById = async (id) => {
    try {
        const response = await axiosInstance.get(`/bookings/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al obtener la reserva:', error.response?.data || error.message)
        throw error
    }
}

export const createBooking = async (booking) => {
    try {
        const response = await axiosInstance.post('/bookings', booking, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al crear la reserva:', error.response?.data || error.message)
        throw error
    }
}

export const updateBooking = async (id, booking) => {
    try {
        const response = await axiosInstance.put(`/bookings/${id}`, booking, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al actualizar la reserva:', error.response?.data || error.message)
        throw error
    }
}

export const deleteBooking = async (id) => {
    try {
        const response = await axiosInstance.delete(`/bookings/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al eliminar la reserva:', error.response?.data || error.message)
        throw error
    }
}

