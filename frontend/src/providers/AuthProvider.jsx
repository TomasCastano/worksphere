import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { login as loginRequest, getLoggedUser as getLoggedUserRequest, register as registerRequest } from "../api/authService"
import Cookies from "js-cookie"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(Cookies.get("token") || null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const fetchUser = useCallback(async () => {
        if (!token) {
            setUser(null)
            setIsLoading(false)
            return
        }
        
        try {
            const userData = await getLoggedUserRequest()
            setUser(userData)
        } catch (error) {
            console.error("Error al obtener usuario:", error)
            Cookies.remove("token")
            setToken(null)
            setUser(null)
            setError(error.response?.data?.message || "Error al obtener el usuario")
        } finally {
            setIsLoading(false)
        }
    }, [token])

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    const login = async (email, password) => {
        try {
            const data = await loginRequest(email, password)
            Cookies.set("token", data.token, { secure: true, sameSite: 'strict' })
            setToken(data.token)
            setError(null); 
            return { success: true }
        } catch (error) {
            console.error("Error en login:", error)
            const errorMessage = "Credenciales incorrectas";
            setError(errorMessage);
            return { 
                success: false, 
                error: errorMessage 
            }
        }
    }

    const register = async (userData) => {
        try {
            const data = await registerRequest(userData)
            Cookies.set("token", data.token, { secure: true, sameSite: 'strict' })
            setToken(data.token)
            setError(null);
            return { success: true }
        } catch (error) {
            console.error("Error en registro:", error)
            setError(error.response?.data?.message || "Error en el registro")
            return { 
                success: false, 
                error: error.response?.data?.message || "Error en el registro" 
            }
        }
    }

    const logout = () => {
        Cookies.remove("token")
        setToken(null)
        setUser(null)
        setError(null);
    }

    return (
        <AuthContext.Provider value={{ 
            user, 
            token, 
            isLoading,
            error,
            login, 
            logout, 
            register 
        }}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}