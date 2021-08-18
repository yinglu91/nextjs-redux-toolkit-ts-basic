import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import { kanyeApiSlice } from "../features/kanye/kanyeApiSlice"
import { usersApiSlice } from "../features/users/usersApiSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [kanyeApiSlice.reducerPath]: kanyeApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(kanyeApiSlice.middleware)
      .concat(usersApiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
