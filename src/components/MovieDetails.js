import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
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
  
  const navigate = useNavigate(); 

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
    
    if (!isCastVisible) {
      const currentURL = location.pathname;
      navigate(`${currentURL}/cast`);
    }
  };

  const toggleReviewsVisibility = () => {
    setIsReviewsVisible(!isReviewsVisible);
  };
  const goBackLink = {
    pathname: '/movies',
    search: `?search=${searchQuery}`,
  };
  return (
    <div className={styles['movie-details']}>
      <div className={styles['go-back-link']}>
        <Link
          to={goBackLink}
        >
          Go back
        </Link>
      </div>
      
      <div>
        <Link to="/" className={styles['homeLink']}>Home</Link>
        <Link to="/movies" className={styles['homeLink']}>Movies</Link>
      </div>
      
      <h2 className={styles['movie-title']}>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
        className={styles['movie-poster']}
      />
      <p className={styles['movie-overview']}>{movieDetails.overview}</p>
      <p className={styles['genres']}>
        Genres: {movieDetails.genres && movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
      {userScore !== null && (
        <p className={styles['user-score']}>User Score: {userScore}</p>
      )}
      <div>
        <Link to="#" className={styles['link']} onClick={toggleCastVisibility}>
          {isCastVisible ? 'Hide Cast' : 'Show Cast'}
        </Link>

        <Link to="#" className={styles['link']} onClick={toggleReviewsVisibility}>
          {isReviewsVisible ? 'Hide Reviews' : 'Show Reviews'}
        </Link>
      </div>

      {isCastVisible && <Cast movieId={movieId} />}
      {isReviewsVisible && <Reviews movieId={movieId} />}
    </div>
  );
}

export default MovieDetails;
