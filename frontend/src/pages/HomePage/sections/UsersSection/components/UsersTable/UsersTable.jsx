const UsersTable = ({ users }) => {
    return (
        <div className="rounded-md overflow-hidden border border-gray-200">
            <table className="min-w-full border-separate border-spacing-0">
                <thead className="bg-gray-500">
                    <tr>
                        <th className='text-left p-2'>Nombre</th>
                        <th className='text-left p-2'>Email</th>
                        <th className='text-left p-2'>Rol</th>
                        <th className='text-left p-2'>Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className='p-2 text-left'>{user.nombre}</td>
                            <td className='p-2 text-left'>{user.email}</td>
                            <td className='p-2 text-left'>{user.role.nombre}</td>
                            <td className='p-2 text-left'>Acciones</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable
