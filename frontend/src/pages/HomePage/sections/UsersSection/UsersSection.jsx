import { useUsers } from "../../../../providers/UsersProvider"
import { useAuth } from "../../../../providers/AuthProvider"
import UsersTable from "./components/UsersTable/UsersTable"
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'

const UsersSection = () => {
    const { users } = useUsers()
    const { createUser } = useAuth()

    const handleCreateUser = () => {
        createUser({nombre: "jairito", email: "jairito@gmail.com", password: "1234", rol_id: 2})
    }

    return (
        <section className="p-10 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Administración de usuarios</h2>
            <div className="flex justify-between items-center gap-2">
                <input type="text" placeholder="Buscar usuario" className="border border-gray-200 rounded px-3 py-2" />
                <button className="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm" onClick={handleCreateUser}><PersonAddOutlinedIcon fontSize="small" /> Agregar usuario</button>
            </div>
            <UsersTable users={users} />
        </section>
    )
}

export default UsersSection
