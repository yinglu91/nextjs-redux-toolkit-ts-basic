import { useGetUsersQuery } from "../features/users/usersApiSlice"

const users = () => {
  const { data = [], isFetching, error, isError } = useGetUsersQuery()
  return (
    <div>
      <h2>Users:</h2>

      {isFetching && <p>Loading...</p>}

      {data && data.map((user) => <h3 key={user.id}>{user.name}</h3>)}

      {isError && <p>Oops, something went wrong {error}</p>}

      {/* <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
      Generate Kanye Quote
    </button> */}
    </div>
  )
}

export default users
