import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { jokesApi } from './jokesApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [jokesApi.reducerPath]: jokesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokesApi.middleware),
})

setupListeners(store.dispatch)