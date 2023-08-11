import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState({});
  const movieId = props.match.params.movieId;

  useEffect(() => {
    axios.get(`/movies/get-movie-details?movieId=${movieId}&api_key=b1d75cfaae6b922289a72c3eab080e3a`)
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
      <p>{movieDetails.overview}</p>
      <p>{movieDetails.genres}</p>
    </div>
  );
}
MovieDetails.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

export default MovieDetails;
