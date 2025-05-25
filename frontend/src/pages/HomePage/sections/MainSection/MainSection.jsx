import React from 'react'
import { useAuth } from '../../../../providers/AuthProvider'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import { useNavigate } from 'react-router-dom'

const MainSection = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    return (
        <section className="p-10 flex flex-col gap-5 overflow-hidden w-full flex-1">
            <h2 className="text-2xl font-bold">¡Bienvenido de nuevo <span className="text-gray-900">{user?.nombre}</span>!</h2>
            <p className="text-gray-600 font-medium text-base">Reserva un espacio de coworking con nosotros</p>
            <button className="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer"
                onClick={() => navigate('/home/bookings')}>
                <EventOutlinedIcon fontSize="small" />
                Agregar reserva
            </button>
        </section>
    )
}

export default MainSection