import React from "react"
import { render } from "@testing-library/react"
import Navbar from "./Navbar"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
export const cache = new InMemoryCache()
test("Navbar", () => {
  const client = new ApolloClient({
    cache,
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  })
  render(
    <ApolloProvider client={client}>
      <Navbar />
    </ApolloProvider>
  )
})
