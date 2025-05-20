import { useUsers } from "../../../../providers/UsersProvider"
import UsersTable from "./components/UsersTable/UsersTable"

const UsersSection = () => {
    const { users } = useUsers()

    return (
        <section className="p-10 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Administración de usuarios</h2>
            <UsersTable users={users} />
        </section>
    )
}

export default UsersSection
