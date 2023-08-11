import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

function Review(props) {
  const [reviewData, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios.get(`/movies/get-movie-reviews?movieId=${movieId}&api_key=b1d75cfaae6b922289a72c3eab080e3a`)
      .then(response => {
        setReview(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviewData.length > 0 ? (
        <ul>
          {reviewData.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
}

export default Review;
