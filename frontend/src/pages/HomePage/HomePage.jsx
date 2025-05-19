import React from 'react'
import Sidebar from './sections/Sidebar/Sidebar'
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute'
import ReservationsSection from './sections/ReservationsSection/ReservationsSection'
import { Routes, Route } from 'react-router-dom'

const HomePage = () => {
    return (
        <main className='flex h-[100dvh]'>
            <Sidebar />
            <Routes>
                <Route path="/reservations" element={<ProtectedRoute><ReservationsSection /></ProtectedRoute>} />
            </Routes>
        </main>
    )
}

export default HomePage