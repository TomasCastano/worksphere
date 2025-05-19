import { createContext, useContext, useState, useEffect } from "react"
import { getUsers, getUserById } from "../api/usersService"
import Cookies from "js-cookie"

const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    console.log(users)
    
    useEffect(() => {
        const token = Cookies.get("token")
        if (token) {
            getUsers().then((data) => {
                setUsers(data)
            }).catch((err) => {
                console.error('Error al obtener usuarios:', err)
                setUsers([])
            })
        } else {
            setUsers([])
        }
    }, [])

    const getUser = async (id) => {
        const data = await getUserById(id)
        setUser(data)
    }

    return (
        <UsersContext.Provider value={{ users, user, getUser }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsers = () => useContext(UsersContext)