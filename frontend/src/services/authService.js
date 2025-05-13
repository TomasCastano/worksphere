import axios from "axios"

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password
        })
        return response.data
    } catch (error) {
        console.error('Error de inicio de sesión:', error.response?.data || error.message)
        throw error
    }
}
