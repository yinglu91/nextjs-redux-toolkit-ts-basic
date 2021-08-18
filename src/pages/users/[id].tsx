import { useRouter } from "next/router"

import { useGetUserQuery } from "../../features/users/usersApiSlice"

const UserDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: user, isFetching, isError } = useGetUserQuery(+id)

  return (
    <div>
      <h2>User:</h2>

      {isFetching && <p>Loading...</p>}

      {user && (
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>

          <p>
            Address: {user.address.street}, {user.address.suite},{" "}
            {user.address.city} {user.address.zipcode}
          </p>
        </div>
      )}

      {isError && <p>Oops, something went wrong.</p>}
    </div>
  )
}

export default UserDetailPage
