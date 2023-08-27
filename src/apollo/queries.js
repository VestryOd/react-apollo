import { gql } from "@apollo/client"

export const GET_MOVIES = gql`
    query GetMovies {
        movies {
            id
            title
            medium_cover_image
        }
    }
`;
