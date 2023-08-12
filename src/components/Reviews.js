import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Reviews({ movieId }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b1d75cfaae6b922289a72c3eab080e3a`)
      .then(response => {
        setReviewList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviewList.length > 0 ? (
        <ul>
          {reviewList.map(review => (
            <li key={review.id}>
              <p>{review.content}</p>
              <p>Author: {review.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
}

export default Reviews;
