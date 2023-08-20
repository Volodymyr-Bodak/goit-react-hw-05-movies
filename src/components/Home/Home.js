import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import s from 'components/Home/Home.module.css';

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
      <div className={s.container}>
        <NavLink to="/" className={` ${s.activeNavLink}`} activeClassName={s.active}>Home</NavLink>
        <NavLink to="/movies" className={s.navLink} activeClassName={s.active}>Movies</NavLink>
      </div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id} className= {s.item}>
            <Link to={`/movies/${movie.id}`}>
              <h2 className={s.title}>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
