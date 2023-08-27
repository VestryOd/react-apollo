import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log("___HOST", process.env.HOST);

const client = new ApolloClient({
  uri: process.env.HOST,
  cache: new InMemoryCache()
})

export default client;
