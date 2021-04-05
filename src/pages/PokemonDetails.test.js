import React from "react"
import { render } from "@testing-library/react"
import PokemonDetails from "./PokemonDetails"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
export const cache = new InMemoryCache()
test("PokemonDetails", () => {
  const client = new ApolloClient({
    cache,
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  })
  render(
    <ApolloProvider client={client}>
      <PokemonDetails />
    </ApolloProvider>
  )
})
