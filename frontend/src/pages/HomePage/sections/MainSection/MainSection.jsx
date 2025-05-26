import React from 'react'
import { useAuth } from '../../../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Spaces from './components/Spaces/Spaces'
import WhyUs from './components/WhyUs/WhyUs'
import Footer from './components/Footer/Footer'

const MainSection = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    return (
        <section className="w-full flex-1 h-[100dvh]">
            <div className='flex flex-col items-center sm:px-10 px-5 py-15 h-full gap-20 overflow-y-auto overflow-x-hidden'>
                <header className="flex flex-col items-center gap-8 max-w-[800px] w-full">
                    <p className="text-xs font-medium py-2 px-4 bg-teal-100 rounded-2xl text-teal-900 sm:mb-3 mb-0 text-center">¡Bienvenido de nuevo <span className='font-semibold'>{user?.nombre}</span>!</p>
                    <h1 className="text-gray-900 font-bold md:text-5xl text-4xl text-center w-full">Tu espacio de trabajo <span className='text-teal-900'>perfecto</span> te espera</h1>
                    <p className="text-gray-600 text-lg md:text-xl text-center w-full">Descubre espacios modernos y equipados para potenciar tu productividad. Reserva en segundos y enfócate en lo que realmente importa.</p>
                    <div className="flex sm:flex-row flex-col mt-3 gap-4 items-center justify-center max-w-[500px] w-full">
                        <button className="bg-teal-600 sm:w-full w-fit text-white px-3 py-2 rounded hover:bg-teal-700 flex justify-center items-center gap-2 md:text-lg text-sm font-medium cursor-pointer transition-colors"
                            onClick={() => navigate('/home/bookings')}>
                            <EventOutlinedIcon fontSize="small" />
                            Reservar ahora
                            <KeyboardArrowRightOutlinedIcon fontSize="small" />
                        </button>
                        <button className="bg-white border border-gray-200 sm:w-full w-fit text-gray-900 px-3 py-2 rounded hover:bg-gray-200 flex justify-center items-center gap-2 md:text-lg text-sm font-medium cursor-pointer transition-colors"
                            onClick={() => navigate('/home/spaces')}>
                            Ver espacios disponibles
                        </button>
                    </div>
                </header>
                <div className='flex sm:gap-4 gap-2 items-center justify-center max-w-[800px] w-full my-5'>
                    <div className='sm:p-5 p-2 flex flex-col gap-2 items-center text-center bg-white border border-gray-200 rounded-md shadow-xs hover:shadow-md transition-shadow'>
                        <span className='md:text-3xl text-2xl font-bold text-teal-900'>+50</span>
                        <p className='text-gray-600 md:text-sm text-xs'>Espacios disponibles</p>
                    </div>
                    <div className='sm:p-5 p-2 flex flex-col gap-2 items-center text-center bg-white border border-gray-200 rounded-md shadow-xs hover:shadow-md transition-shadow'>
                        <span className='md:text-3xl text-2xl font-bold text-teal-900'>24/7</span>
                        <p className='text-gray-600 md:text-sm text-xs'>Acceso disponible</p>
                    </div>
                    <div className='sm:p-5 p-2 flex flex-col gap-2 items-center text-center bg-white border border-gray-200 rounded-md shadow-xs hover:shadow-md transition-shadow'>
                        <span className='md:text-3xl text-2xl font-bold text-teal-900'>98%</span>
                        <p className='text-gray-600 md:text-sm text-xs'>Satisfacción al cliente</p>
                    </div>
                </div>
                <Spaces />
                <WhyUs />
                <Footer />
            </div>
        </section>
    )
}

export default MainSection