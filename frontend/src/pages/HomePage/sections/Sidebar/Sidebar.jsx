import React from 'react'
import logo from '../../../../assets/images/logo.webp'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
    return (
        <nav className="w-[200px] h-[100dvh] bg-white border-r border-gray-200 flex flex-col justify-between">
            <header className="px-4 py-6 flex flex-col items-center justify-center border-b border-gray-200">
                <img className='w-9 h-auto object-contain' src={logo} alt="logo" />
                <h1 className="text-xl font-bold text-gray-900">Worksphere</h1>
            </header>
            <div className="p-4 flex flex-col h-full gap-2 items-start">
                <ul className="flex flex-col gap-2 w-full">
                    <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2"><CalendarTodayOutlinedIcon fontSize="small" />Reservas</li>
                    <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2"><MapOutlinedIcon fontSize="small" />Espacios</li>
                    <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2"><CreditCardOutlinedIcon fontSize="small" />Pagos</li>
                    <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2"><PersonOutlinedIcon fontSize="small" />Mi perfil</li>
                    <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2"><SettingsOutlinedIcon fontSize="small" />Configuración</li>
                </ul>
            </div>
            <footer className="p-4 w-full flex items-center justify-between border-t border-gray-200">
                <div className="flex flex-col">
                    <span className="font-medium text-sm">Usuario</span>
                    <span className="text-xs text-gray-500">usuario@usuario.com</span>
                </div>
                <button className="p-2 rounded-md hover:bg-gray-100 cursor-pointer  "><LogoutOutlinedIcon fontSize="small" /></button>
            </footer>
        </nav>
    )
}

export default Sidebar