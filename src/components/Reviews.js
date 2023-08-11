import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function Review(props) {
  const [reviewData, setReview] = useState([]);

  const movieId = props.match.params.movieId;

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
      <ul>
        {reviewData.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Review.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Review;
