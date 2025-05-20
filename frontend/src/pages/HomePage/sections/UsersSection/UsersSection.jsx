import { useUsers } from "../../../../providers/UsersProvider"

const UsersSection = () => {
    const { users } = useUsers()

    return (
        <div>
            <p>UsersSection</p>
            <p>{users.length}</p>
        </div>
    )
}

export default UsersSection
