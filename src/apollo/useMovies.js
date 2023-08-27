import { useQuery } from "@apollo/client";
import { GET_MOVIES } from './queries';

export const useMovies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  return { loading, error, data };
}
