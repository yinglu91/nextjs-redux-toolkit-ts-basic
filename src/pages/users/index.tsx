import Link from "next/link"
import { useGetUsersQuery } from "../../features/users/usersApiSlice"

const users = () => {
  const { data: users = [], isFetching, isError } = useGetUsersQuery()
  return (
    <div>
      <h2>Users:</h2>

      {isFetching && <p>Loading...</p>}

      {users &&
        users.map((user) => (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </div>
        ))}

      {isError && <p>Oops, something went wrong.</p>}
    </div>
  )
}

export default users
