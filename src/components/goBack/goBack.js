import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from 'components/goBack/goBack.module.css';

function GoBackButton() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('search');

  const goBackLink = {
    pathname: '/movies',
    search: `?search=${searchQuery}`,
  };

  return (
    <div className={styles['go-back-link']}>
      <Link to={goBackLink}>Go back</Link>
    </div>
  );
}

export default GoBackButton;
