import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

const Home = React.lazy(() => import('./Home'));
const Movies = React.lazy(() => import('./Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

function App() {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;