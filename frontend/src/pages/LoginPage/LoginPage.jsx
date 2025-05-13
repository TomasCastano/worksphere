import React, { useState } from 'react'

const LoginPage = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleUsernameChange = (e) => {
		setUsername(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(username, password)
	}

	return (
		<div className="w-full h-[100dvh] flex justify-center items-center flex-col gap-4">
			<h1 className="text-2xl font-bold">CoWorking</h1>
			<div className="max-w-md w-full bg-white p-10 rounded-lg shadow-lg flex flex-col gap-5">
				<h2 className="text-xl font-semibold">Iniciar Sesión</h2>
				<form className='flex flex-col gap-3' onSubmit={handleSubmit}>
					<div className="flex flex-col gap-2">
						<label className="text-sm text-gray-500" htmlFor="username">Nombre de usuario</label>
						<input 
							className="p-2 rounded-lg border border-gray-300" 
							type="text" 
							id="username" 
							placeholder="Nombre de usuario"
							value={username}
							onChange={handleUsernameChange}
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
							onChange={handlePasswordChange}
						/>
					</div>
					<button type="submit" className="bg-blue-500 text-white p-2 rounded-lg mt-3" onClick={handleSubmit}>Iniciar Sesión</button>
				</form>
			</div>
		</div>
	)
}

export default LoginPage