import React from "react"
import { render } from "@testing-library/react"
import Details from "./Details"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
export const cache = new InMemoryCache()
test("Details", () => {
  const client = new ApolloClient({
    cache,
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  })
  render(
    <ApolloProvider client={client}>
      <Details />
    </ApolloProvider>
  )
})
