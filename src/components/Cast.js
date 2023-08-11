import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Cast(props) {
  const [castList, setCast] = useState([]);
  const { movieId } = useParams(); 

  useEffect(() => {
    axios.get(`/movies/get-movie-credits?movieId=${movieId}&api_key=b1d75cfaae6b922289a72c3eab080e3a`)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {castList.length > 0 ? (
        <ul>
          {castList.map(actor => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast found.</p>
      )}
    </div>
  );
}

export default Cast;
