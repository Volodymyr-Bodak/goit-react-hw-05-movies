import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function Movies(props) {
  const [moviesData, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      axios.get(`/search/search-movies?query=${searchQuery}&api_key=b1d75cfaae6b922289a72c3eab080e3a`)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    setMovies([]);
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <form>
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for a movie" />
      </form>
      <ul>
        {moviesData.map(movie => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Movies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Movies;