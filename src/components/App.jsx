import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
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
          
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route exact path="/movies/:movieId/reviews" component={Reviews} />
          <Route path="/*" element={<NotFound />} />
     
        </Routes>
        
      
      </Suspense>
    </Router>
  );
}

export default App;






