import { useFetchKanyeQuery } from "../features/kanye/kanyeApiSlice"

const KanyePage = () => {
  const { data, isFetching, isError } = useFetchKanyeQuery()
  return (
    <div>
      <h2>Generate random Kanye West quote</h2>

      {isFetching && <p>Loading...</p>}

      {data && <p>{data.quote}</p>}
      {/* I'm a creative genius */}

      {isError && <p>Oops, something went wrong</p>}

      {/* <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
        Generate Kanye Quote
      </button> */}
    </div>
  )
}

export default KanyePage

// http://localhost:3000/kanye
