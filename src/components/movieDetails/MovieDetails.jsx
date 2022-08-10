import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  return (
    <>
      {movie.length !== 0 && (
        <>
          <Link to="/" className={s.btnGoBack}>
            Go back
          </Link>
          <section className={s.section}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <div className={s.infoContainer}>
              <h2 className={s.title}>{movie.title}</h2>
              <p className={s.userScore}>
                User Score: {movie.vote_average * 10}%
              </p>
              <p className={s.overviewTitle}>Overview:</p>
              <p className={s.overview}>{movie.overview}</p>
              <div>
                <p className={s.genresTitle}>Genres: </p>
                <ul className={s.genreList}>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieDetails;
