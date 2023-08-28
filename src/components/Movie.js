import { Link } from "react-router-dom";

export const Movie = ({ id, title }) => {
  return (
    <div className="link-wrapper">
      <Link to={`/${id}`} className="link">{title}</Link>
    </div>
  )
}
