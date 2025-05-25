import React from 'react'
import { useAuth } from '../../../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Spaces from './components/Spaces/Spaces'

const MainSection = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    return (
        <section className="w-full flex-1 h-[100dvh]">
            <div className='flex flex-col items-center px-10 py-15 h-full gap-15 overflow-y-auto overflow-x-hidden'>
                <header className="flex flex-col items-center gap-8 max-w-[800px] w-full">
                    <p className="text-xs font-medium py-2 px-4 bg-teal-100 rounded-2xl text-teal-900 mb-3">¡Bienvenido de nuevo <span className='font-semibold'>{user?.nombre}</span>!</p>
                    <h1 className="text-gray-900 font-bold text-5xl text-center w-full">Tu espacio de trabajo <span className='text-teal-900'>perfecto</span> te espera</h1>
                    <p className="text-gray-600 text-xl text-center w-full">Descubre espacios modernos y equipados para potenciar tu productividad. Reserva en segundos y enfócate en lo que realmente importa.</p>
                    <div className="flex mt-3 gap-4 items-center justify-center max-w-[500px] w-full">
                        <button className="bg-teal-600 w-full text-white px-3 py-2 rounded hover:bg-teal-700 flex justify-center items-center gap-2 text-lg font-medium cursor-pointer transition-colors"
                            onClick={() => navigate('/home/bookings')}>
                            <EventOutlinedIcon fontSize="small" />
                            Reservar ahora
                            <KeyboardArrowRightOutlinedIcon fontSize="small" />
                        </button>
                        <button className="bg-white border border-gray-200 w-full text-gray-900 px-3 py-2 rounded hover:bg-gray-200 flex justify-center items-center gap-2 text-lg font-medium cursor-pointer transition-colors"
                            onClick={() => navigate('/home/spaces')}>
                            Ver espacios disponibles
                        </button>
                    </div>
                </header>
                <div className='flex gap-4 items-center justify-between max-w-[800px] w-full my-5'>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <span className='text-3xl font-bold text-teal-900'>+50</span>
                        <p>Espacios disponibles</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <span className='text-3xl font-bold text-teal-900'>24/7</span>
                        <p>Acceso disponible</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <span className='text-3xl font-bold text-teal-900'>98%</span>
                        <p>Satisfacción al cliente</p>
                    </div>
                </div>
                <Spaces />
            </div>
        </section>
    )
}

export default MainSection