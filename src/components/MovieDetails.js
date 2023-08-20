import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Reviews from 'components/Reviews';
import { Route, Routes, NavLink } from 'react-router-dom';
import styles from 'components/MovieDetail.module.css';
import Cast from './Cast/Cast';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState({});
  const [userScore, setUserScore] = useState(null);
  const [isCastVisible, setIsCastVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b1d75cfaae6b922289a72c3eab080e3a`)
      .then(response => {
        setMovieDetails(response.data);
        setUserScore(Math.floor(response.data.vote_average));
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  const toggleCastVisibility = () => {
    setIsCastVisible(!isCastVisible);
    setIsReviewsVisible(false);

    if (!isCastVisible) {
      navigate(`./cast`, { replace: true });
    } else {
      navigate(`/movies/${movieId}`, { replace: true });
    }
  };

  const toggleReviewsVisibility = () => {
    setIsReviewsVisible(!isReviewsVisible);
    setIsCastVisible(false);

    if (!isReviewsVisible) {
      navigate(`./reviews`, { replace: true });
    } else {
      navigate(`/movies/${movieId}`, { replace: true });
    }
  };

  return (
    <div className={styles['movie-details']}>
      <Link className={styles.goBack} to={location?.state?.from ?? '/'}>
        Go Back
      </Link>
      <div>
        <NavLink to="/" className={styles.navLink} activeClassName={styles.active}>Home</NavLink>
        <NavLink to="/movies" className={`${styles.activeNavLink} ${location.pathname === `/movies/${movieId}` ? styles.active : ''}`} activeClassName={styles.active}>Movies</NavLink>
      </div>

      <h2 className={styles['movie-title']}>{movieDetails.title || 'Movie Details Not Found'}</h2>
      {movieDetails.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className={styles['movie-poster']}
        />
      ) : (
        <div className={styles.noImage}>No Image Found</div>
      )}
      <p className={styles['movie-overview']}>{movieDetails.overview || 'Overview Not Found'}</p>
      <p className={styles['genres']}>
        Genres: {movieDetails.genres && movieDetails.genres.length > 0
          ? movieDetails.genres.map(genre => genre.name).join(', ')
          : <span className={styles.genresNotFound}>Genres Not Found</span>}
      </p>
      {userScore !== null && (
        <p className={styles['user-score']}>User Score: {userScore}</p>
      )}
      <div>
        <button className={styles['link']} onClick={toggleCastVisibility}>
          {isCastVisible ? 'Hide Cast' : 'Show Cast'}
        </button>
        <button className={styles['link']} onClick={toggleReviewsVisibility}>
          {isReviewsVisible ? 'Hide Reviews' : 'Show Reviews'}
        </button>
      </div>

      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </div>
  );
}

export default MovieDetails;
