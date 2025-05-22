import { useState } from 'react'
import { useBookings } from '../../../../providers/BookingsProvider'
import BookingCard from './components/BookingCard/BookingCard'

const BookingsSection = () => {
    const { bookings } = useBookings()
    const [open, setOpen] = useState(false)
    const handleCreateBooking = (booking) => {
        createBooking(booking)
        setOpen(false)
    }

    return (
        <section className="p-10 flex flex-col gap-5 overflow-hidden w-full">
            <h2 className="text-2xl font-bold">Administración de reservas</h2>
            <div className="flex flex-wrap justify-center gap-5 overflow-x-auto p-10 bg-white rounded-md border border-gray-200 shadow-xs">
                {bookings.map((booking) => (
                    <BookingCard
                        key={booking.id}
                        space={booking.space.nombre}
                        user={booking.user.nombre}
                        email={booking.user.email}
                        status={booking.estado}
                        initDate={booking.fecha_inicio}
                        endDate={booking.fecha_fin}
                    />
                ))}
            </div>
        </section>
    )
}

export default BookingsSection