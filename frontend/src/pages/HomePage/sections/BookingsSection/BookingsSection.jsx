import { useState } from 'react'
import { useBookings } from '../../../../providers/BookingsProvider'
import { useAuth } from '../../../../providers/AuthProvider'
import BookingCard from './components/BookingCard/BookingCard'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import CreateBookingModal from './components/CreateBookingModal/CreateBookingModal'

const BookingsSection = () => {
    const { bookings, createBooking, deleteBooking } = useBookings()
    const [open, setOpen] = useState(false)
    const { user } = useAuth()
    const isAdmin = user?.rol_id === 1

    const handleCreateBooking = (booking) => {
        createBooking(booking).then(() => {
            setOpen(false)
        })
    }

    return (
        <section className="p-10 flex flex-col gap-5 overflow-hidden w-full flex-1">
            <h2 className="text-2xl font-bold">Administración de reservas</h2>
            <div className="flex justify-end items-center gap-2">
                <button
                    className="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <EventOutlinedIcon fontSize="small" />
                    Agregar reserva
                </button>
            </div>
            {isAdmin ? (
                <div className="flex flex-wrap justify-center gap-5 overflow-x-auto p-10 bg-white rounded-md border border-gray-200 shadow-xs">
                    {bookings.length === 0 ? (
                        <p className="text-gray-600 font-medium text-base">No hay reservas en este momento</p>
                    ) : (
                        bookings.map((booking) => (
                            <BookingCard
                                key={booking.id}
                                space={booking.space?.nombre || 'Cargando...'}
                                userName={booking.user?.nombre || 'Cargando...'}
                                email={booking.user?.email || ''}
                                status={booking.estado}
                                initDate={booking.fecha_inicio}
                                endDate={booking.fecha_fin}
                                id={booking.id}
                                deleteBooking={deleteBooking}
                                booking={booking}
                        />
                    )))}
                </div>
            ) : (
                <>  
                    <h4 className="text-xl font-medium">Tus reservas</h4>
                    <div className="flex flex-wrap justify-center gap-5 overflow-x-auto p-10 bg-white rounded-md border border-gray-200 shadow-xs">
                        {bookings.filter((booking) => booking.user.id === user.id).length === 0 ? (
                            <p className="text-gray-600 font-medium text-base">No tienes reservas en este momento</p>
                        ) : (
                            bookings
                            .filter((booking) => booking.user.id === user.id)
                            .map((booking) => (
                                <BookingCard
                                    key={booking.id}
                                    space={booking.space?.nombre || 'Cargando...'}
                                    userName={booking.user?.nombre || 'Cargando...'}
                                    email={booking.user?.email || ''}
                                    status={booking.estado}
                                    initDate={booking.fecha_inicio}
                                    endDate={booking.fecha_fin}
                                    id={booking.id}
                                    deleteBooking={deleteBooking}
                                    booking={booking}
                                />
                            ))
                        )}
                    </div>
                </>
            )}
            <CreateBookingModal open={open} setOpen={setOpen} handleCreateBooking={handleCreateBooking} />
        </section>
    )
}

export default BookingsSection