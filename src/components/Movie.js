import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LinkContainer, LinkPoster, PosterTitle } from './StyledComponents';
import { Image } from './Image';
import { LikeButton } from './LikeButton';
import * as queries from "../apollo/queries";
import { LIKE_MOVIE } from '../constants';

export const Movie = ({ id, title, url, isLiked }) => {

  const [toggleLikeMovie] = useMutation(queries[LIKE_MOVIE], {
    variables: { id: parseInt(id), isLiked }
  });

  return (
    <LinkContainer>
      <LinkPoster>
        <LikeButton isLiked={isLiked} onClick={toggleLikeMovie} />
        <Image id={id} title={title} url={url} />
        <Link to={`/${id}`} className="link">
          <PosterTitle>{title}</PosterTitle>
        </Link>
      </LinkPoster>
    </LinkContainer>
  )
}
