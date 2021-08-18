import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export const usersApiSlice = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => {
    return {
      getUsers: builder.query<User[], void>({
        query: () => `/users`,
      }),
    }
  },
})

export const { useGetUsersQuery } = usersApiSlice
