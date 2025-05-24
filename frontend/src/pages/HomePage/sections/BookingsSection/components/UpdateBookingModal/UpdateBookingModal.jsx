import { useState, useEffect } from 'react'
import { useSpaces } from '../../../../../../providers/SpacesProvider'
import { useUsers } from '../../../../../../providers/UsersProvider'
import Modal from '../../../../../../components/Modal/Modal'
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined'
import formatDate from '../../../../../../utils/formatDate'

const UpdateBookingModal = ({ open, setOpen, booking: initialBooking, bookingID, handleUpdateBooking }) => {
    const { spaces } = useSpaces()
    const { users } = useUsers()
    const [booking, setBooking] = useState({
        space: "",
        user: "",
        date: "",
        startTime: "",
        endTime: "",
        status: ""
    })

    useEffect(() => {
        if (initialBooking) {
            const fechaInicio = initialBooking.fecha_inicio ? new Date(initialBooking.fecha_inicio) : null;
            const fechaFin = initialBooking.fecha_fin ? new Date(initialBooking.fecha_fin) : null;
            setBooking({
                space: initialBooking.space?.id || "",
                user: initialBooking.user?.id || "",
                date: fechaInicio ? fechaInicio.toISOString().slice(0,10) : "",
                startTime: fechaInicio ? fechaInicio.toISOString().slice(11,16) : "",
                endTime: fechaFin ? fechaFin.toISOString().slice(11,16) : "",
                status: initialBooking.estado || ""
            })
        }
    }, [initialBooking])

    const handleSubmit = (e) => {
        e.preventDefault()
        const initDateTime = `${booking.date}T${booking.startTime}`
        const endDateTime = `${booking.date}T${booking.endTime}`
        const bookingToSend = {
            ...booking,
            estado: booking.status,
            space: { id: parseInt(booking.space) },
            user: { id: parseInt(booking.user) },
            fecha_inicio: formatDate(initDateTime),
            fecha_fin: formatDate(endDateTime),
        }
        handleUpdateBooking(bookingToSend, bookingID)
        setOpen(false)
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Actualizar reserva</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="space" className="text-sm font-medium text-gray-700">Espacio</label>
                        <select
                            id="space"
                            name="space"
                            required
                            value={booking.space}
                            onChange={(e) => setBooking({ ...booking, space: e.target.value })}
                            className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="">Seleccionar espacio</option>
                            {spaces.map((space) => (
                                <option key={space.id} value={space.id}>
                                    {space.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="user" className="text-sm font-medium text-gray-700">Usuario</label>
                        <select
                            id="user"
                            name="user"
                            required
                            value={booking.user}
                            onChange={(e) => setBooking({ ...booking, user: e.target.value })}
                            className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="">Seleccionar usuario</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="date" className="text-sm font-medium text-gray-700">
                            Día
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={booking.date}
                            onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                            className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <div className="flex flex-col gap-1 w-1/2">
                            <label htmlFor="startTime" className="text-sm font-medium text-gray-700">
                                Hora de inicio
                            </label>
                            <input
                                type="time"
                                id="startTime"
                                name="startTime"
                                value={booking.startTime}
                                onChange={(e) => setBooking({ ...booking, startTime: e.target.value })}
                                className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-1/2">
                            <label htmlFor="endTime" className="text-sm font-medium text-gray-700">
                                Hora de finalización
                            </label>
                            <input
                                type="time"
                                id="endTime"
                                name="endTime"
                                min={booking.startTime}
                                value={booking.endTime}
                                onChange={(e) => setBooking({ ...booking, endTime: e.target.value })}
                                className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="status" className="text-sm font-medium text-gray-700">
                            Estado
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={booking.status}
                            onChange={(e) => setBooking({ ...booking, status: e.target.value })}
                            className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Seleccionar estado</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="confirmada">Confirmada</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        className="mt-2 bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer"
                    >
                        <EditCalendarOutlinedIcon fontSize="small" className="text-gray-200" />
                        Actualizar reserva
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default UpdateBookingModal