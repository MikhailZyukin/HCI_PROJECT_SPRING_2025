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
        <source src="/assets/video/backDrop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div ></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent w-100">
        <div className="container-fluid">
          <Link to="/" onClick={closeMenu} className="navbar-brand d-flex align-items-center gap-2 text-white px-3 py-1 rounded-pill orangeButton">
                      <img src={emotionLogo} alt="E-Motion Logo" width="60" height="60" />
                      <span className="fs-4 fw-bold">E - Motion</span>
                    </Link>
          <button
            className="navbar-toggler orangeButton"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className={`collapse navbar-collapse  ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <div className="d-lg-none w-100 my-2 ">
              <div className="d-flex flex-column text-center p-3 mx-2 orangeButton rounded-pill shadow">
                <Link to="/about" onClick={closeMenu} className="btn text-white mb-2">
                About
                </Link>
                <Link to="/features" onClick={closeMenu} className="btn text-white">
                Features
                </Link>
                <Link to="/login" onClick={closeMenu} className="btn text-white">
                  Login / Sign Up
                </Link>
              </div>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
              <li className="nav-item me-2">
                <Link
                to="/about"
                onClick={closeMenu} 
                className="btn text-white rounded-pill orangeButton d-none d-lg-block">
                About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                to="/features" 
                onClick={closeMenu} 
                className="btn text-white rounded-pill orangeButton d-none d-lg-block">
                Features
                </Link>
              </li>
            </ul>
            <Link
              to="/login"
              onClick={closeMenu}
              className="btn text-white rounded-pill orangeButton d-none d-lg-block"
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className='row'>
        <div className='col-sm-1'></div>
        <div className="col-sm-4 text-white mt-5 mb-4 rounded-top rounded-bottom orangeElement"> 
             <img src="/assets/img/emotionLogo.svg" alt="E-Motion Logo" width="60" height="60" />
        </div>
        <div className='col-sm-2'></div>
        <div className="col-sm-4 text-white mt-5 mb-4 rounded-top rounded-bottom orangeElement"> 
            <p className="lead text-center ">Helping children and parents grow emotionally — together</p>
            <ul>
            <li> Encourage emotional expression and parent-child bonding through simple games.</li>
                <li> Split content by age for developmentally appropriate activities.</li>
                <li> Focus on learnability, efficiency, and satisfaction — tested with real users.</li>
                <li> Promote shared reflection with calm, engaging visuals and sound.</li>
            </ul>
        </div>
        <div className="col-sm-1"></div>
      </div>

      {/* Footer */}
      <footer className="orangeButton text-white text-center mt-auto py-4 rounded-top rounded-bottom">
        <div className="container">
          <p className="mb-1">© 2025 E-Motion Project</p>
          <p className="mb-0 small">Created for HCI - Supporting children’s emotional growth through playful design.</p>
        </div>
      </footer>
    </div>
  );
}
