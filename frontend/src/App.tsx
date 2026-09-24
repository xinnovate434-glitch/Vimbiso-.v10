import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ReviewFormPage from './pages/ReviewFormPage';
import ReviewsDashboardPage from './pages/ReviewsDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <nav className="top-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/reviews/new">New Review</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ReviewsDashboardPage />} />
        <Route path="/reviews/new" element={<ReviewFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
