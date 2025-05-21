import { useUsers } from "../../../../../../providers/UsersProvider"
import { useState } from "react"
import UpdateUserModal from "../UpdateUserModal/UpdateUserModal"
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

const UserRow = ({user}) => {
    const [open, setOpen] = useState(false)
    const { deleteUser, updateUserData } = useUsers()

    const handleDeleteUser = () => {
        deleteUser(user.id)
    }

    const handleUpdateUser = (userData, id) => {
        updateUserData(userData, id)
        setOpen(false)
    }
    
    return (
        <>
        <tr className="bg-white border-b border-gray-200 text-gray-600 hover:bg-gray-50">
            <td className='px-6 py-4 font-medium'>{user.nombre}</td>
            <td className='px-6 py-4'>{user.email}</td>
            <td className='px-6 py-4'>
                <p className="px-2 py-1 rounded-full bg-gray-200 text-gray-900 text-xs text-center">{user.role.nombre}</p>
            </td>
            <td className='px-6 py-4 flex gap-2 justify-center items-center'>
                <button onClick={() => setOpen(true)} className="bg-gray-900 font-medium text-white px-3 py-2 rounded hover:bg-gray-800 w-fit flex items-center gap-1 text-xs cursor-pointer"><EditNoteOutlinedIcon fontSize='small' />Editar</button>
                <button onClick={handleDeleteUser} className="bg-red-500 font-medium text-white px-3 py-2 rounded hover:bg-red-400 w-fit flex items-center gap-1 text-xs cursor-pointer"><DeleteOutlineIcon fontSize='small' />Eliminar</button>
            </td>
        </tr>
        <UpdateUserModal
            open={open}
            setOpen={setOpen}
            user={user}
            userID={user.id}
            handleUpdateUser={handleUpdateUser}
        />
        </>
    )
}

export default UserRow