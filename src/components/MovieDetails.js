import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams, Link } from 'react-router-dom';

import Cast from './Cast';

function MovieDetails() {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b1d75cfaae6b922289a72c3eab080e3a`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p>{movieDetails.overview}</p>
      <p>
        Genres: {movieDetails.genres && movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
    </div>
  );
}

export default MovieDetails;

