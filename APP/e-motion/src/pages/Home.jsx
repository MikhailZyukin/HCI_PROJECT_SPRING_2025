import { useState } from 'react';
import { Link } from 'react-router-dom';
import emotionLogo from '../assets/img/emotionLogo.svg';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-100 min-vh-100 m-0 p-0 d-flex flex-column position-relative" style={{ overflowX: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover z-n1"
      >
        <source src="/assets/img/backDrop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Dark Overlay */}
      <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 z-0"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent w-100">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center gap-2 text-white px-3 py-1 rounded-pill orangeButton">
            <img src={emotionLogo} alt="E-Motion Logo" width="40" height="40" />
            <span className="fs-4 fw-bold">E - Motion</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <button className="btn text-white rounded-pill orangeButton">About</button>
              </li>
              <li className="nav-item">
                <button className="btn text-white rounded-pill orangeButton">Features</button>
              </li>
            </ul>
            <Link to="/parent-login" onClick={closeMenu} className="btn text-white rounded-pill orangeButton">
              Login / Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="container-fluid p-0">
        <h2 className="text-center text-white">WELCOME TO E - MOTION</h2>
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="d-block w-100" height="400" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">First Slide Placeholder</text>
              </svg>
            </div>
            <div className="carousel-item">
              <svg className="d-block w-100" height="400" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">Second Slide Placeholder</text>
              </svg>
            </div>
            <div className="carousel-item">
              <svg className="d-block w-100" height="400" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#999" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">Third Slide Placeholder</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container text-white mt-5 mb-4">
        <p className="lead text-center">Helping children and parents grow emotionally — together.</p>
        <ul>
          <li> Encourage emotional expression and parent-child bonding through simple games.</li>
          <li> Split content by age for developmentally appropriate activities.</li>
          <li> Focus on learnability, efficiency, and satisfaction — tested with real users.</li>
          <li> Promote shared reflection with calm, engaging visuals and sound.</li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="orangeButton text-white text-center mt-auto py-4 rounded-top">
        <div className="container">
          <p className="mb-1">© 2025 E-Motion Project</p>
          <p className="mb-0 small">Created for HCI - Supporting children’s emotional growth through playful design.</p>
        </div>
      </footer>
    </div>
  );
}
