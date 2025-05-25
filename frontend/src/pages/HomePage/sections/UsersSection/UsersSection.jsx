import { useState } from "react"
import { useUsers } from "../../../../providers/UsersProvider"
import UsersTable from "./components/UsersTable/UsersTable"
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import CreateUserModal from "./components/CreateUserModal/CreateUserModal"

const UsersSection = () => {
    const { users, createUser } = useUsers()
    const [open, setOpen] = useState(false)

    const handleCreateUser = (user) => {
        createUser(user).then(() => {
            setOpen(false);
        });
    }

    return (
        <>
        <section className="p-10 flex flex-col gap-5 overflow-hidden w-full flex-1">
            <h2 className="text-2xl font-bold">Administración de usuarios</h2>
            <div className="flex justify-end items-center gap-2">
                <button
                    className="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-2 text-sm cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <PersonAddOutlinedIcon fontSize="small" />
                    Agregar usuario
                </button>
            </div>
            <div className="p-10 bg-white rounded-md border border-gray-200 shadow-xs w-full overflow-x-auto">
                <UsersTable users={users} />
            </div>
        </section>
        <CreateUserModal open={open} setOpen={setOpen} handleCreateUser={handleCreateUser} />
        </>
            
    )
}

export default UsersSection
