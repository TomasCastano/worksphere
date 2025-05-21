import AuthPage from "./pages/AuthPage/AuthPage"
import { AuthProvider } from "./providers/AuthProvider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { UsersProvider } from "./providers/UsersProvider"
import { SpacesProvider } from "./providers/SpacesProvider"

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<AuthPage />} />
                    <Route
                        path="/home/*"  
                        element={
                            <ProtectedRoute>
                                <UsersProvider>
                                    <SpacesProvider>
                                        <HomePage />
                                    </SpacesProvider>
                                </UsersProvider>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
