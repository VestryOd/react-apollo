import { useParams } from "react-router-dom";
import { Image, Layout, LikeButton } from '../components';
import {
  Error,
  Loading,
  MovieColumn,
  MovieContainer, MovieDescription, MoviePoster, MovieSubtitle,
  MovieTitle,
  Section,
} from '../components/StyledComponents';
import { useRequest } from '../apollo';
import { GET_MOVIE } from '../constants';

export const Details = () => {
  const { id } = useParams();
  const { loading, error, data } = useRequest(GET_MOVIE, {
    variables: { id: +id },
  });

  if (loading && !data?.movie) {
    return (
      <Layout>
        <Loading>Loading...</Loading>
      </Layout>
    )
  }

  if (!loading && error) {
    return (
      <Layout>
        <Error>{error.message}</Error>
      </Layout>
    )
  }

  const { title, language, rating, description_intro, summary, medium_cover_image, isLiked } = data.movie;
  return (
    <Layout>
      <Section>
        <MovieContainer>
          <MovieColumn>
            <MovieTitle>{title}</MovieTitle>
            <MovieSubtitle>{language} · {rating}</MovieSubtitle>
            <MovieDescription>{description_intro || summary}</MovieDescription>
          </MovieColumn>
          <MoviePoster>
            <LikeButton isLiked={isLiked} />
            <Image id={id} title={title} url={medium_cover_image} className="image-details" />
          </MoviePoster>
        </MovieContainer>
      </Section>
    </Layout>
  )
};
