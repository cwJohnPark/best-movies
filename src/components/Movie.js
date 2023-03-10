import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h2>
      <img src={coverImage} style={{ width: "180px" }} alt={title} />
      <p>{summary}</p>

      <h3>Genere</h3>
      <ul>{genres && genres.map((gen) => <li key={gen}>{gen}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
