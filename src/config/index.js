import { ApolloClient, InMemoryCache } from '@apollo/client'

export const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
})

export default client