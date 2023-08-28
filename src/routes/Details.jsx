import { useParams } from "react-router-dom";
import { Layout } from '../components';
import { Error, Loading, MovieWrapper, Section, Subtitle } from '../components/StyledComponents';
import { useRequest } from '../apollo';
import { GET_MOVIE } from '../constants';

export const Details = () => {
  const { id } = useParams();
  const { loading, error, data } = useRequest(GET_MOVIE, {
    variables: { id: +id },
  });

  if (loading && !data?.movie) return <Loading>Loading...</Loading>

  if (!loading && error) return <Error>{error.message}</Error>

  const { title } = data.movie;
  return (
    <Layout>
      <Section>
        <MovieWrapper>
          <Subtitle className="center">{title}</Subtitle>
        </MovieWrapper>
      </Section>
    </Layout>
  )
};
