import { IconHeart } from './IconHeart';

export const LikeButton = ({ isLiked, onClick }) => {
  const color = isLiked ? "#ca1a1a" : "#808080"
  return (
    <div className="button-wrapper">
      <button className="like-button" onClick={onClick}>
        <IconHeart color={color} filter={"drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));"} />
      </button>
    </div>
  )
}
