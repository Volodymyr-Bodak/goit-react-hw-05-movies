import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Movies() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('search');
  
  const [moviesData, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchParam || '');

  useEffect(() => {
    if (searchQuery) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b1d75cfaae6b922289a72c3eab080e3a&query=${searchQuery}`)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
    } else {
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b1d75cfaae6b922289a72c3eab080e3a')
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);

    navigate(`/movies?search=${newSearchQuery}`);
  };


  return (
    <div>
      <div>
        <NavLink to="/" activeClassName="activelink">Home</NavLink>
      </div>
      <div>
        <NavLink to="/goit-react-hw-05-movies/movies" activeClassName="activelink">Movies</NavLink>
      </div>
      <h2>Search Movies</h2>
      <form>
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for a movie" />
      </form>
      <ul>
        {moviesData.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ search: searchQuery }}>
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Movies;
