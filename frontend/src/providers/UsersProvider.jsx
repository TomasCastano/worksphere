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
            // Fetch the complete user data after creation
            return getUsersRequest().then(updatedUsers => {
                const newUser = updatedUsers.find(u => u.id === data.id);
                if (newUser) {
                    setUsers(prevUsers => [...prevUsers, newUser]);
                    return newUser;
                }
                return data;
            });
        });
    }

    const updateUserData = (user, id) => {
        console.log("Actualizando usuario ID:", id)
        updateUserRequest(id, user).then((data) => {
          setUsers(users.map(u => u.id === id ? data : u))
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