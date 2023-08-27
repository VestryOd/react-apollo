import { GET_MOVIES, useMovies } from '../apollo';

export const Home = () => {
  const { loading, error, data } = useMovies(GET_MOVIES);
  console.log(loading, error, data);
  return (
    <>
      <h1>"Home page"</h1>
      {loading && !data && <h3>Loading...</h3>}
      <hr />
      {data?.movies && data.movies.map(m => (<p key={m.id}>{m.title}</p>))}
    </>
  )
};
