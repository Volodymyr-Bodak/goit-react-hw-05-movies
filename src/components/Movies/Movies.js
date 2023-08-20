import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from 'components/Movies/Movies.module.css';

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
      setMovies([]); 
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);

    navigate(`/movies?search=${newSearchQuery}`);
  };

  return (
    <div className={styles.container}>
      <div>
        <NavLink to="/" className={styles.navLink} activeClassName={styles.active}>Home</NavLink>
        <NavLink to="/movies" className={styles.activeNavLink} activeClassName={styles.active}>Movies</NavLink>
      </div>
      <h2>Search Movies</h2>
      <form className={styles.searchBox}>
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for a movie" />
      </form>
      {moviesData.length > 0 && (
        <ul className={styles.movieList}>
          {moviesData.map(movie => (
            <li key={movie.id} className={styles.movieListItem}>
              <Link
                state={{ from: location }}
                className={styles.item}
                to={`/movies/${movie.id}`}
              >
                {movie.poster_path ? (
                  <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} className={styles.movieImage} />
                ) : (
                  <div className={styles.noImage}>No Image Found</div>
                )}
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                <p className={styles.movieOverview}>{movie.overview}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
