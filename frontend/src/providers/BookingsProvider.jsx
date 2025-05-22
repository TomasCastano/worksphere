import { createContext, useContext, useState, useEffect } from "react"
import { getBookings as getBookingsRequest, createBooking as createBookingRequest, updateBooking as updateBookingRequest, deleteBooking as deleteBookingRequest } from "../api/bookingsService"
import Cookies from "js-cookie"

const BookingsContext = createContext()

export const BookingsProvider = ({children}) => {
    const [bookings, setBookings] = useState([])
    const [token, setToken] = useState(Cookies.get("token") || null)

    useEffect(() => {
        if (token) {
            getBookingsRequest().then((data) => {
                setBookings(data)
            })
        } else {
            setBookings([])
        }
    }, [token])

    const getBookings = () => {
        if (token) {
            getBookingsRequest().then((data) => {
                setBookings(data)
            })
        } else {
            setBookings([])
        }
    }

    const getBookingById = (id) => {
        return bookings.find((booking) => booking.id === id)
    }

    const createBooking = (booking) => {
        createBookingRequest(booking).then((data) => {
            setBookings([...bookings, data])
        })
    }

    const updateBooking = (booking, id) => {
        updateBookingRequest(id, booking).then((data) => {
            setBookings(bookings.map(b => b.id === id ? data : b))
        })
    }

    const deleteBooking = (id) => {
        deleteBookingRequest(id).then(() => {
            setBookings(bookings.filter((booking) => booking.id !== id))
        })
    }

    return (
        <BookingsContext.Provider value={{ 
            bookings, 
            token, 
            setBookings, 
            getBookings, 
            getBookingById, 
            createBooking, 
            updateBooking, 
            deleteBooking 
        }}>
            {children}
        </BookingsContext.Provider>
    )
}

export const useBookings = () => useContext(BookingsContext)