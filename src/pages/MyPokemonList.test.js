import React from "react"
import { render } from "@testing-library/react"
import MyPokemonList from "./MyPokemonList"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
export const cache = new InMemoryCache()
test("MyPokemonList", () => {
  const client = new ApolloClient({
    cache,
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  })
  render(
    <ApolloProvider client={client}>
      <MyPokemonList />
    </ApolloProvider>
  )
})
