import { useState } from "react"
import { useUsers } from "../../../../providers/UsersProvider"
import UsersTable from "./components/UsersTable/UsersTable"
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import CreateUserModal from "./components/CreateUserModal/CreateUserModal"

const UsersSection = () => {
    const { users, createUser } = useUsers()
    const [open, setOpen] = useState(false)

    const handleCreateUser = (user) => {
        createUser(user)
        setOpen(false)
    }

    return (
        <>
        <section className="p-10 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Administración de usuarios</h2>
            <div className="flex justify-between items-center gap-2">
                <input
                    className="py-2 px-3 rounded-md border border-gray-300 bg-white outline-none focus:border-gray-500 w-1/2"
                    type="text"
                    placeholder="Buscar usuario"
                />
                <button
                    className="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <PersonAddOutlinedIcon fontSize="small" />
                    Agregar usuario
                </button>
            </div>
            <UsersTable users={users} />
        </section>
        <CreateUserModal open={open} setOpen={setOpen} handleCreateUser={handleCreateUser} />
        </>
            
    )
}

export default UsersSection
