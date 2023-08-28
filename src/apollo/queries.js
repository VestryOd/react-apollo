import { gql } from "@apollo/client"

export const GET_MOVIES = gql`
    query getMovies {
        movies {
            id
            title
            medium_cover_image
        }
    }
`;

export const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            year
            rating
            url
            language
            medium_cover_image
        }
    }
`;
