import { picturePlaceholder } from '../constants';

export const Image = ({ url, title, id, className = "" }) => {
  const onError = (event) => {
    event.currentTarget.src = picturePlaceholder(id);
  }
  return (
    <img className={`image ${className}`} src={url} alt={title} onError={onError}/>
  )
}
