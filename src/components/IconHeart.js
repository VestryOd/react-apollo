export const IconHeart = ({ isLiked, ...rest }) => {
  const color = isLiked ? "#ca1a1a" : "#808080";
  return (
    <svg
      fill={color}
      viewBox="0 0 16 16"
      width="100%"
      height="100%"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  )
}
