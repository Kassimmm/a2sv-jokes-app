import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/joke/' }),
  endpoints: (builder) => ({
    getJokesByName: builder.query({
      query: (name) => `Any`,
      method: 'GET',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJokesByNameQuery } = jokesApi