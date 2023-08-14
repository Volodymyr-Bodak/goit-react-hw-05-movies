import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Cast from './Cast'; 
import Reviews from './Reviews'; 
import styles from 'components/styles.module.css';
import axios from 'axios';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('search');

  const [movieDetails, setMovieDetails] = useState({});
  const [userScore, setUserScore] = useState(null);
  const [isCastVisible, setIsCastVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b1d75cfaae6b922289a72c3eab080e3a`)
      .then(response => {
        setMovieDetails(response.data);
        setUserScore(response.data.vote_average);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  const toggleCastVisibility = () => {
    setIsCastVisible(!isCastVisible);
  };

  const toggleReviewsVisibility = () => {
    setIsReviewsVisible(!isReviewsVisible);
  };

  return (
    <div className={styles['movie-details']}>
      <div className={styles['go-back-link']}>
        <Link
          to={{
            pathname: '/movies',
            search: `?search=${searchQuery}`,
          }}
        >
          Go back
        </Link>
      </div>
      
      <div>
        <Link to="/goit-react-hw-05-movies/"> Home</Link>
        <Link to="/goit-react-hw-05-movies/movies"> Movies</Link>
      </div>
      
      <h2>{movieDetails.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p>{movieDetails.overview}</p>
      <p>
        Genres: {movieDetails.genres && movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
      {userScore !== null && (
        <p>User Score: {userScore}</p>
      )}
      <div>
        <Link to="#" onClick={toggleCastVisibility}>
          {isCastVisible ? 'Hide Cast' : 'Show Cast'}
        </Link>

        <Link to="#" onClick={toggleReviewsVisibility}>
          {isReviewsVisible ? 'Hide Reviews' : 'Show Reviews'}
        </Link>
      </div>

      {isCastVisible && <Cast movieId={movieId} />}
      {isReviewsVisible && <Reviews movieId={movieId} />}
    </div>
  );
}

export default MovieDetails;
