import { Link } from "react-router-dom";
import { LinkContainer, LinkPoster, PosterTitle } from './StyledComponents';
import { Image } from './Image';

export const Movie = ({ id, title, url }) => {
  return (
    <LinkContainer>
      <Link to={`/${id}`} className="link">
        <LinkPoster>
          <Image id={id} title={title} url={url} />
          <PosterTitle>{title}</PosterTitle>
        </LinkPoster>
      </Link>
    </LinkContainer>
  )
}
