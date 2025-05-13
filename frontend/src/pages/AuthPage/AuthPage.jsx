import { useState } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.webp'
import LoginSection from './sections/LoginSection/LoginSection'

const AuthPage = () => {

	const navigate = useNavigate()
	const { login } = useAuth()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await login(email, password)
			navigate('/home')
		} catch (error) {
			console.error('Error de inicio de sesión:', error.response?.data || error.message)
		}
	}

	return (
		<div className="w-full h-[100dvh] flex justify-center items-center flex-col gap-4">
			<div className="max-w-md w-full bg-white p-10 rounded-md flex flex-col gap-10 border border-gray-200 border-t-[10px] border-t-gray-900">
				<header className="flex flex-col gap-1 items-center justify-center">
					<img className='w-16 h-auto' src={logo} alt="logo" />
					<h1 className="text-4xl font-bold text-gray-900">Worksphere</h1>
					<p className="text-sm mt-1 text-gray-500">Gestión de reservas para espacios de coworking</p>
				</header>
				<LoginSection 
					email={email} 
					password={password} 
					setEmail={setEmail} 
					setPassword={setPassword} 
					handleSubmit={handleSubmit} 
				/>
			</div>
		</div>
	)
}

export default AuthPage;
