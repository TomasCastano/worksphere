import { useState } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

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
			<h1 className="text-2xl font-bold">CoWorking</h1>
			<div className="max-w-md w-full bg-white p-10 rounded-lg shadow-lg flex flex-col gap-5">
				<h2 className="text-xl font-semibold">Iniciar Sesión</h2>
				<form className='flex flex-col gap-3' onSubmit={handleSubmit}>
					<div className="flex flex-col gap-2">
						<label className="text-sm text-gray-500" htmlFor="email">Email</label>
						<input 
							className="p-2 rounded-lg border border-gray-300" 
							type="text" 
							id="email" 
							placeholder="Email"
							value={email}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-sm text-gray-500" htmlFor="password">Contraseña</label>
						<input 
							className="p-2 rounded-lg border border-gray-300" 
							type="password" 
							id="password" 
							placeholder="Contraseña"
							value={password}
							autoComplete="off"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" className="bg-blue-500 text-white p-2 rounded-lg mt-3">Iniciar Sesión</button>
				</form>
			</div>
		</div>
	)
}

export default LoginPage