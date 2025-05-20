import { useUsers } from "../../../../../../providers/UsersProvider"

const UserRegister = ({user}) => {

    const { deleteUser } = useUsers()

    const handleDeleteUser = () => {
        deleteUser(user.id)
    }
    
    return (
        <tr className="bg-white border-b border-gray-200">
            <td className='px-6 py-4 font-medium'>{user.nombre}</td>
            <td className='px-6 py-4'>{user.email}</td>
            <td className='px-6 py-4'>{user.role.nombre}</td>
            <td className='px-6 py-4 flex gap-2'>
                <button className="bg-gray-900 text-white px-2 py-1 rounded">Editar</button>
                <button onClick={handleDeleteUser} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
        </tr>
    )
}

export default UserRegister