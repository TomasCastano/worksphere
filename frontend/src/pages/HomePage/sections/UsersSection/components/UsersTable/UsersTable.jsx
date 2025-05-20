import UserRegister from "../UserRegister/UserRegister"

const UsersTable = ({ users }) => {
    return (
        <div className="relative overflow-x-auto rounded-md border border-gray-200">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">Nombre</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Rol</th>
                        <th scope="col" className="px-6 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {users.map((user) => (
                        <UserRegister key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable
