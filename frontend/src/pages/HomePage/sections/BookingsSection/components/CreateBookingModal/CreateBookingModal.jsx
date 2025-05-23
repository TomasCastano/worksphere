import { useState } from 'react'
import { useSpaces } from '../../../../../../providers/SpacesProvider'
import { useUsers } from '../../../../../../providers/UsersProvider'
import Modal from '../../../../../../components/Modal/Modal'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import formatDate from '../../../../../../utils/formatDate'

const CreateBookingModal = ({ open, setOpen, handleCreateBooking }) => {
    const { spaces } = useSpaces()
    const { users } = useUsers()

    const [booking, setBooking] = useState({space: "", user: "", initDate: "", endDate: "", status: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        const bookingToSend = {
            ...booking,
            estado: booking.status,
            space: { id: booking.space },
            user: { id: booking.user },
            fecha_inicio: formatDate(booking.initDate),
            fecha_fin: formatDate(booking.endDate),
        }
        handleCreateBooking(bookingToSend)
        setOpen(false)
        setBooking({space: "", user: "", initDate: "", endDate: "", status: ""})
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Agregar una reserva</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="space" className="text-sm font-medium text-gray-700">Espacio</label>
                        <select
                            id="space"
                            name="space"
                            required
                            value={booking.space}
                            onChange={(e) => setBooking({ ...booking, space: parseInt(e.target.value) })}
                            className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="">Seleccionar espacio</option>
                            {spaces.map((space) => (
                                <option key={space.id} value={parseInt(space.id)}>
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
                            onChange={(e) => setBooking({ ...booking, user: parseInt(e.target.value) })}
                            className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="">Seleccionar usuario</option>
                            {users.map((user) => (
                                <option key={user.id} value={parseInt(user.id)}>
                                    {user.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="initDate" className="text-sm font-medium text-gray-700">
                            Fecha y hora de inicio
                        </label>
                        <input
                            type="datetime-local"
                            id="initDate"
                            name="initDate"
                            value={booking.initDate}
                            onChange={(e) => setBooking({ 
                                ...booking, 
                                initDate: e.target.value 
                            })}
                            className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="endDate" className="text-sm font-medium text-gray-700">
                            Fecha y hora de finalización
                        </label>
                        <input
                            type="datetime-local"
                            id="endDate"
                            name="endDate"
                            min={booking.initDate}
                            value={booking.endDate}
                            onChange={(e) => setBooking({
                                ...booking,
                                endDate: e.target.value
                            })}
                            className="block w-full rounded-md border border-gray-300 outline-none px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
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
                    <button type="submit" className="mt-2 bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer">
                        <EventOutlinedIcon fontSize="small" />
                        Agregar reserva
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default CreateBookingModal