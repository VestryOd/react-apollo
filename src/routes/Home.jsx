import { useRequest } from '../apollo';
import { Movie, Layout } from "../components";
import { Error, Loading, Section } from '../components/StyledComponents';
import { GET_MOVIES } from '../constants';

export const Home = () => {
  const { loading, error, data } = useRequest(GET_MOVIES);
  return (
    <Layout>
      {loading && !data && <Loading>Loading...</Loading>}
      {!loading && error && <Error>{error.message}</Error>}
      <Section>
        {data?.movies && data.movies.map(({ id, medium_cover_image, title }) => {
          return (
            <Movie key={id} id={id} url={medium_cover_image} title={title}/>
          )
        })}
      </Section>
    </Layout>
  )
};
