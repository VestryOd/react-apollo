import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_HOST,
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.modify({ id: `Movie:${id}`, fields: {
          isLiked: (isLiked) => !isLiked
          } })
      }
    }
  }
})

export default client;
