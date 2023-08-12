import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Cast from './Cast'; 
import Reviews from './Reviews'; 

function MovieDetails() {
  const { movieId } = useParams();

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
    <div>
      <div className="home-link">
        <Link to="/">Go to Home</Link>
      </div>
      <div className="movielink">
        <Link to="/movies">Movies</Link>
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

      <Link to="#" onClick={toggleCastVisibility}>
        {isCastVisible ? 'Hide Cast' : 'Show Cast'}
      </Link>

      {isCastVisible && <Cast movieId={movieId} />}

      <Link to="#" onClick={toggleReviewsVisibility}>
        {isReviewsVisible ? 'Hide Reviews' : 'Show Reviews'}
      </Link>

      {isReviewsVisible && <Reviews movieId={movieId} />}
    </div>
  );
}

export default MovieDetails;
