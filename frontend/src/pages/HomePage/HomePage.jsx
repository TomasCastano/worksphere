import Sidebar from './sections/Sidebar/Sidebar'
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute'
import MainSection from './sections/MainSection/MainSection'
import BookingsSection from './sections/BookingsSection/BookingsSection'
import SpacesSection from './sections/SpacesSection/SpacesSection'
import PaymentsSection from './sections/PaymentsSection/PaymentsSection'
import UsersSection from './sections/UsersSection/UsersSection'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'

const HomePage = () => {
    const { user } = useAuth()
    const isAdmin = user?.rol_id === 1

    return (
        <main className='flex h-[100dvh]'>
            <Sidebar />
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <MainSection />
                    </ProtectedRoute>
                } />
                {isAdmin ? (
                    <>
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
                    </>
                ) : null}
            </Routes>
        </main>
    )
}

export default HomePage