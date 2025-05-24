import { createContext, useContext, useState, useEffect } from "react"
import { getUsers as getUsersRequest, createUser as createUserRequest, updateUser as updateUserRequest, deleteUser as deleteUserRequest } from "../api/usersService"
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

    const getUserById = (id) => {
        return users.find((user) => user.id === id)
    }

    const createUser = (user) => {
        return createUserRequest(user).then((data) => {
            return getUsersRequest().then(updatedUsers => {
                const newUser = updatedUsers.find(u => u.id === data.id)
                if (newUser) {
                    setUsers(prevUsers => [...prevUsers, newUser])
                    return newUser
                }
                return data
            })
        })
    }

    const updateUserData = (user, id) => {
        return updateUserRequest(id, user).then((data) => {
            return getUsersRequest().then(updatedUsers => {
                const updatedUser = updatedUsers.find(u => u.id === parseInt(id))
                if (updatedUser) {
                    setUsers(prevUsers => 
                        prevUsers.map(u => u.id === parseInt(id) ? updatedUser : u)
                    )
                    return updatedUser
                }
                return data
            })
        })
    }

    const deleteUser = (id) => {
        deleteUserRequest(id).then(() => {
            setUsers(users.filter((user) => user.id !== id))
        })
    }

    return (
        <UsersContext.Provider value={{ users, token, setUsers, getUsers, getUserById, createUser, updateUserData, deleteUser }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsers = () => useContext(UsersContext)