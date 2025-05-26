import React from 'react'
import logo from '../../../../assets/images/logo.webp'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../../../providers/AuthProvider'

const Sidebar = () => {

    const navigate = useNavigate()
    const { logout, user } = useAuth()

    const isAdmin = user?.rol_id === 1

    const location = useLocation()
    const path = location.pathname

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <nav className="w-[200px] h-[100dvh] bg-white border-r border-gray-200 flex flex-col justify-between">
            <header className="px-4 py-6 flex flex-col items-center justify-center border-b border-gray-200">
                <Link to="/home" className="flex flex-col items-center gap-1">
                    <img className='w-9 h-auto object-contain' src={logo} alt="logo" />
                    <h1 className="text-xl font-bold text-gray-900">WorkSphere</h1>
                </Link>
            </header>
            <div className="p-4 flex flex-col h-full gap-2 items-start">
                <ul className="flex flex-col gap-2 w-full">
                    <Link to="/home" className={`p-2 text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ${path === '/home' ? 'bg-gray-900/20 text-gray-900 hover:bg-gray-900/20' : ''}`}><HomeOutlinedIcon fontSize="small" />Inicio</Link>
                    <Link to="/home/bookings" className={`p-2 text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ${path === '/home/bookings' ? 'bg-gray-900/20 text-gray-900 hover:bg-gray-900/20' : ''}`}><CalendarTodayOutlinedIcon fontSize="small" />Reservas</Link>
                    <Link to="/home/spaces" className={`p-2 text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ${path === '/home/spaces' ? 'bg-gray-900/20 text-gray-900 hover:bg-gray-900/20' : ''}`}><MapOutlinedIcon fontSize="small" />Espacios</Link>
                    {isAdmin && <Link to="/home/payments" className={`p-2 text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ${path === '/home/payments' ? 'bg-gray-900/20 text-gray-900 hover:bg-gray-900/20' : ''}`}><CreditCardOutlinedIcon fontSize="small" />Pagos</Link>}
                    {isAdmin && <Link to="/home/users" className={`p-2 text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-2 ${path === '/home/users' ? 'bg-gray-900/20 text-gray-900 hover:bg-gray-900/20' : ''}`}><PeopleAltOutlinedIcon fontSize="small" />Usuarios</Link>}
                </ul>
            </div>
            <footer className="p-4 w-full flex flex-row items-center justify-between gap-2 border-t border-gray-200">
                <div className="flex flex-col overflow-hidden">
                    <span className="font-medium text-sm truncate" title={user?.nombre}>{user?.nombre}</span>
                    <span className="text-xs text-gray-500 truncate" title={user?.email}>{user?.email}</span>
                </div>
                <button onClick={handleLogout} className="flex items-center justify-center p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
                    <LogoutOutlinedIcon fontSize="small" />
                </button>
            </footer>
        </nav>
    )
}

export default Sidebar