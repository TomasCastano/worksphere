import Modal from "../../../../../../components/Modal/Modal"
import { useState } from "react"

const CreateUserModal = ({ open, setOpen, handleCreateUser }) => {
    const [user, setUser] = useState({nombre: "", email: "", password: "", rol_id: 1})

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCreateUser(user)
        setOpen(false)
        setUser({nombre: "", email: "", password: "", rol_id: 1})
    }
    
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-10 flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Agregar usuario</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" name="nombre" value={user.nombre} placeholder="Nombre" onChange={(e) => setUser({...user, nombre: e.target.value})} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" value={user.email} placeholder="Email" onChange={(e) => setUser({...user, email: e.target.value})} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</label>
                        <input type="password" name="password" value={user.password} placeholder="Contraseña" onChange={(e) => setUser({...user, password: e.target.value})} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="rol" className="text-sm font-medium text-gray-700">Rol</label>
                        <select
                            name="rol"
                            id="rol"
                            value={user.rol_id}
                            onChange={(e) => setUser({...user, rol_id: Number(e.target.value)})}
                            className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"
                        >
                            <option value="1">Administrador</option>
                            <option value="2">Usuario</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-gray-900 text-white p-3 rounded-md mt-6 hover:bg-gray-800 transition-colors">Crear</button>
                </form>
            </div>
        </Modal>
    )
}

export default CreateUserModal