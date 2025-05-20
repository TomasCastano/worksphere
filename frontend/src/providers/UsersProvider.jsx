import { createContext, useContext, useState, useEffect } from "react"
import { getUsers as getUsersRequest } from "../api/usersService"
import Cookies from "js-cookie"

const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [token, setToken] = useState(Cookies.get("token") || null)

    useEffect(() => {
        if (token) {
            getUsersRequest().then((data) => {
                setUsers(data)
            })
        } else {
            setUsers([])
        }
    }, [token])

    const getUsers = () => {
        if (token) {
            getUsersRequest().then((data) => {
                setUsers(data)
            })
        } else {
            setUsers([])
        }
    }

    return (
        <UsersContext.Provider value={{ users, token, setUsers, getUsers }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsers = () => useContext(UsersContext)