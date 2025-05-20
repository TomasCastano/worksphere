import { createContext, useContext, useState, useEffect } from "react"
import { login as loginRequest, getLoggedUser as getLoggedUserRequest, createUser as createUserRequest } from "../api/authService"
import Cookies from "js-cookie"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(Cookies.get("token") || null)
    
    useEffect(() => {
        if (token) {
            getLoggedUserRequest().then((data) => {
                setUser(data)
            })
        } else {
            setUser(null)
        }
    }, [token])

    const login = async (email, password) => {
        const data = await loginRequest(email, password)
        Cookies.set("token", data.token, { secure: true, sameSite: 'strict' })
        setToken(data.token)
    }

    const logout = () => {
        Cookies.remove("token")
        setToken(null)
        setUser(null)
    }

    const createUser = (user) => {
        createUserRequest(user).then((data) => {
            setUser(data)
        })
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, createUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)