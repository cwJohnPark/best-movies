import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const API = `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(API);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Best Movies minimum rating above 9</h1>
      {loading ? <strong>Loading...</strong> : null}
      <div>
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
