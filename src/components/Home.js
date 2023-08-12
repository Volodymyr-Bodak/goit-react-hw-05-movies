import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b1d75cfaae6b922289a72c3eab080e3a')
      .then(response => {
        setTrendingMovies(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="home-link">
        <Link to="/">Go to Home</Link>
      </div>
      <div className="movielink">
        <Link to="/movies">Movies</Link>
      </div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
