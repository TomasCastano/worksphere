import Sidebar from './sections/Sidebar/Sidebar'
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute'
import MainSection from './sections/MainSection/MainSection'
import BookingsSection from './sections/BookingsSection/BookingsSection'
import SpacesSection from './sections/SpacesSection/SpacesSection'
import PaymentsSection from './sections/PaymentsSection/PaymentsSection'
import UsersSection from './sections/UsersSection/UsersSection'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'

const AdminRoute = ({ element }) => {
    const { user } = useAuth()
    const isAdmin = user?.rol_id === 1
    
    return isAdmin ? element : <Navigate to="/home" replace />
}

const HomePage = () => {
    return (
        <main className='flex h-[100dvh]'>
            <Sidebar />
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <MainSection />
                    </ProtectedRoute>
                } />
                <Route 
                    path="/bookings" 
                    element={
                        <ProtectedRoute>
                            <AdminRoute element={<BookingsSection />} />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/spaces" 
                    element={
                        <ProtectedRoute>
                            <AdminRoute element={<SpacesSection />} />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/payments" 
                    element={
                        <ProtectedRoute>
                            <AdminRoute element={<PaymentsSection />} />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/users" 
                    element={
                        <ProtectedRoute>
                            <AdminRoute element={<UsersSection />} />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </main>
    )
}

export default HomePage