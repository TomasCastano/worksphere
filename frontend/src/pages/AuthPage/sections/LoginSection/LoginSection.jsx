import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'

const LoginSection = ({ email, password, setEmail, setPassword, handleSubmit, error }) => {
	return (
		<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
			{error && 
				<p className="flex items-center gap-2 text-red-500 text-sm bg-red-100 p-2 rounded-md">
					<ErrorOutlineOutlinedIcon fontSize='small' />{error}
				</p>
			}
			<div className="flex flex-col gap-1">
				<label className="text-gray-700" htmlFor="email">Email</label>
				<input 
				className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500" 
				type="text" 
				id="email" 
				placeholder="usuario@email.com"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label className="text-gray-700" htmlFor="password">Contraseña</label>
				<input 
					className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500" 
					type="password" 
					id="password" 
					placeholder="Contraseña"
					value={password}
					autoComplete="off"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button type="submit" className="bg-gray-900 text-white p-3 rounded-md mt-6 hover:bg-gray-800 transition-colors">
				Iniciar Sesión
			</button>
		</form>
	)
}

export default LoginSection