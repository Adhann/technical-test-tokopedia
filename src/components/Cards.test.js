import React from "react"
import { render } from "@testing-library/react"
import Cards from "./Cards"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
export const cache = new InMemoryCache()
test("Cards", () => {
  const client = new ApolloClient({
    cache,
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  })
  render(
    <ApolloProvider client={client}>
      <Cards />
    </ApolloProvider>
  )
})
