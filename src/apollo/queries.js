import { gql } from "@apollo/client"

export const GET_MOVIES = gql`
    query getMovies {
        movies {
            id
            title
            medium_cover_image
            isLiked @client
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
            description_intro
            summary
            isLiked @client
        }
        suggestions(id: $id) {
            id
            title
            medium_cover_image
        }
    }
`;

export const LIKE_MOVIE = gql`
    mutation likeMovie($id: Int) {
        likeMovie(id: $id) @client
    }
`;
