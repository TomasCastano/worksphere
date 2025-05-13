import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("❌ Error en la solicitud:", error.response?.data || error.message);

        return Promise.reject({
            message: error.response?.data?.message || "Error en la solicitud",
            status: error.response?.status,
        });
    }
)

export default axiosInstance;