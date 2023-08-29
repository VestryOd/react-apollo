import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_HOST,
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.modify({ id: `Movie:${id}`, fields: {
          isLiked: () => true
          } })
      }
    }
  }
})

export default client;
