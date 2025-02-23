import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog1 from './pages/PongalPage';
import Blog2 from './pages/OnamPage';
import Blog3 from './pages/NavaratriPage';
import Blog4 from './pages/MahaShivaratri';
import Blog5 from './pages/HoliPage';
import Blog6 from './pages/DiwaliPage';
import Blog7 from './pages/EidPage';
import Blog8 from './pages/RakshaBandhan';
import Blog9 from './pages/DurgaPujaPage';
import Blog10 from './pages/KarwaChauth';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
const App = () => {
  return (
    <Router>
      <div className="app">
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Blog App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog1">Pongal</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog2">Onam</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog3">Navaratri</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog4">MahaShivaratri</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog5">Holi</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog6">Diwali</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog7">Eid</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog8">RakshaBandhan</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog9">Durgapuja</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog10">KarwaChauth</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content Routes */}
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/blog1" element={<Blog1 />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/blog3" element={<Blog3 />} />
            <Route path="/blog4" element={<Blog4 />} />
            <Route path="/blog5" element={<Blog5 />} />
            <Route path="/blog6" element={<Blog6 />} />
            <Route path="/blog7" element={<Blog7 />} />
            <Route path="/blog8" element={<Blog8 />} />
            <Route path="/blog9" element={<Blog9 />} />
            <Route path="/blog10" element={<Blog10 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;