import Sidebar from './sections/Sidebar/Sidebar'
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute'
import BookingsSection from './sections/BookingsSection/BookingsSection'
import SpacesSection from './sections/SpacesSection/SpacesSection'
import PaymentsSection from './sections/PaymentsSection/PaymentsSection'
import UsersSection from './sections/UsersSection/UsersSection'
import { Routes, Route } from 'react-router-dom'

const HomePage = () => {
    return (
        <main className='flex h-[100dvh]'>
            <Sidebar />
            <Routes>
                <Route path="/bookings" element={
                    <ProtectedRoute>
                        <BookingsSection />
                    </ProtectedRoute>
                } />
                <Route path="/spaces" element={
                    <ProtectedRoute>
                        <SpacesSection />
                    </ProtectedRoute>
                } />
                <Route path="/payments" element={
                    <ProtectedRoute>
                        <PaymentsSection />
                    </ProtectedRoute>
                } />
                <Route path="/users" element={
                    <ProtectedRoute>
                        <UsersSection />
                    </ProtectedRoute>
                } />
            </Routes>
        </main>
    )
}

export default HomePage