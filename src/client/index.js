import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_HOST,
  cache: new InMemoryCache()
})

export default client;
