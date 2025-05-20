import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { login as loginRequest, getLoggedUser as getLoggedUserRequest, register as registerRequest } from "../api/authService"
import Cookies from "js-cookie"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(Cookies.get("token") || null)
    const [isLoading, setIsLoading] = useState(true)
    
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
            // Si hay un error, limpiamos el token inválido
            Cookies.remove("token")
            setToken(null)
            setUser(null)
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
            return { success: true }
        } catch (error) {
            console.error("Error en login:", error)
            return { 
                success: false, 
                error: error.response?.data?.message || "Error en el inicio de sesión" 
            }
        }
    }

    const register = async (userData) => {
        try {
            const data = await registerRequest(userData)
            Cookies.set("token", data.token, { secure: true, sameSite: 'strict' })
            setToken(data.token)
            return { success: true }
        } catch (error) {
            console.error("Error en registro:", error)
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
    }

    return (
        <AuthContext.Provider value={{ 
            user, 
            token, 
            isLoading,
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
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider")
    }
    return context
}