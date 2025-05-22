import axiosInstance from "./axiosInstance"
import Cookies from "js-cookie"

export const getPayments = async () => {
    try {
        const response = await axiosInstance.get('/payments', { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al obtener los pagos:', error.response?.data || error.message)
        throw error
    }
}

export const getPaymentById = async (id) => {
    try {
        const response = await axiosInstance.get(`/payments/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al obtener el pago:', error.response?.data || error.message)
        throw error
    }
}

export const createPayment = async (payment) => {
    try {
        const response = await axiosInstance.post('/payments', payment, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al crear el pago:', error.response?.data || error.message)
        throw error
    }
}

export const updatePayment = async (id, payment) => {
    try {
        const response = await axiosInstance.put(`/payments/${id}`, payment, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al actualizar el pago:', error.response?.data || error.message)
        throw error
    }
}

export const deletePayment = async (id) => {
    try {
        const response = await axiosInstance.delete(`/payments/${id}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
        return response.data
    } catch (error) {
        console.error('Error al eliminar el pago:', error.response?.data || error.message)
        throw error
    }
}
