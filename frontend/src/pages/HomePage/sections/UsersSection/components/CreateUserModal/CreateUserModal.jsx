import Modal from "../../../../../../components/modal/modal"
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 w-[500px]">
                <div className="flex flex-col gap-1">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" value={user.nombre} placeholder="Nombre" onChange={(e) => setUser({...user, nombre: e.target.value})} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={user.email} placeholder="Email" onChange={(e) => setUser({...user, email: e.target.value})} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" value={user.password} placeholder="Contraseña" onChange={(e) => setUser({...user, password: e.target.value})} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="rol">Rol</label>
                    <select name="rol" id="rol" onChange={(e) => setUser({...user, rol_id: e.target.value})} className="p-3 rounded-md border border-gray-300 bg-gray-50 outline-none focus:border-gray-500">
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                    </select>
                </div>
                <button type="submit" className="bg-gray-900 text-white p-3 rounded-md mt-6 hover:bg-gray-800 transition-colors">Crear</button>
            </form>
        </Modal>
    )
}

export default CreateUserModal