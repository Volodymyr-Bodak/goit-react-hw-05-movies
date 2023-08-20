

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Cast.module.css'; 

function Cast({ movieId }) {
  const [castList, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b1d75cfaae6b922289a72c3eab080e3a`)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <h2 className={styles.castTitle}>Cast</h2>
      {castList.length > 0 ? (
        <ul className={styles.castList}>
          {castList.map(actor => (
            <li key={actor.id} className={styles.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
                className={styles.actorImage}
              />
              <h3 className={styles.actorName}>{actor.name}</h3>
              <p className={styles.actorCharacter}>{actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.notFound}>No cast found.</p>
      )}
    </div>
  );
}

export default Cast;
