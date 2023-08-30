import { IconHeart } from './IconHeart';

export const LikeButton = ({ isLiked, onClick }) => {
  return (
    <div className="button-wrapper">
      <button className="like-button" onClick={onClick}>
        <IconHeart isLiked={isLiked} />
      </button>
    </div>
  )
}
