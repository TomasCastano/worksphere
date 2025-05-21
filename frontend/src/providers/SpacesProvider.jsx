import { createContext, useContext, useState, useEffect } from "react"
import { getSpaces as getSpacesRequest, createSpace as createSpaceRequest, updateSpace as updateSpaceRequest, deleteSpace as deleteSpaceRequest } from "../api/spacesService"
import Cookies from "js-cookie"

const SpacesContext = createContext()

export const SpacesProvider = ({ children }) => {
    const [spaces, setSpaces] = useState([])
    const [token, setToken] = useState(Cookies.get("token") || null)

    useEffect(() => {
        if (token) {
            getSpacesRequest().then((data) => {
                setSpaces(data)
            })
        } else {
            setSpaces([])
        }
    }, [token])

    const getSpaces = () => {
        if (token) {
            getSpacesRequest().then((data) => {
                setSpaces(data)
            })
        } else {
            setSpaces([])
        }
    }


    const getSpaceById = (id) => {
        return spaces.find((space) => space.id === id)
    }

    const createSpace = (space) => {
        createSpaceRequest(space).then((data) => {
            setSpaces([...spaces, data])
        })
    }

    const updateSpaceData = (space, id) => {
        updateSpaceRequest(id, space).then((data) => {
            setSpaces(spaces.map(s => s.id === id ? data : s))
        })
    }

    const deleteSpace = (id) => {
        deleteSpaceRequest(id).then(() => {
            setSpaces(spaces.filter((space) => space.id !== id))
        })
    }

    return (
        <SpacesContext.Provider value={{ 
            spaces, 
            token, 
            setSpaces, 
            getSpaces, 
            getSpaceById, 
            createSpace, 
            updateSpace: updateSpaceData, 
            deleteSpace 
        }}>
            {children}
        </SpacesContext.Provider>
    )
}

export const useSpaces = () => useContext(SpacesContext)