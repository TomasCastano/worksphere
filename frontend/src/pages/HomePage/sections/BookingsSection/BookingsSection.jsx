import { useState } from 'react'
import { useBookings } from '../../../../providers/BookingsProvider'
import BookingCard from './components/BookingCard/BookingCard'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import CreateBookingModal from './components/CreateBookingModal/CreateBookingModal'

const BookingsSection = () => {
    const { bookings, createBooking, deleteBooking } = useBookings()
    const [open, setOpen] = useState(false)

    const handleCreateBooking = (booking) => {
        createBooking(booking)
        setOpen(false)
    }

    console.log(bookings)

    return (
        <section className="p-10 flex flex-col gap-5 overflow-hidden w-full">
            <h2 className="text-2xl font-bold">Administración de reservas</h2>
            <div className="flex justify-between items-center gap-2">
                <input
                    className="py-2 px-3 rounded-md border border-gray-200 bg-white outline-none focus:border-gray-500 w-1/2"
                    type="text"
                    placeholder="Buscar reserva"
                />
                <button
                    className="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <PersonAddOutlinedIcon fontSize="small" />
                    Agregar reserva
                </button>
            </div>
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
                        id={booking.id}
                        deleteBooking={deleteBooking}
                    />
                ))}
                <CreateBookingModal open={open} setOpen={setOpen} handleCreateBooking={handleCreateBooking} />
            </div>
        </section>
    )
}

export default BookingsSection