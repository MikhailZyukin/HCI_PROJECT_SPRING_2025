import { useState } from 'react';
import { Link } from 'react-router-dom';
import emotionLogo from '../assets/img/emotionLogo.svg';
import fml from '../assets/img/family.webp';


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
        <div className="col-sm-4 text-white mt-5 mb-4 "> 
             <img className = "rounded-pill" src={fml} alt="E-Motion Logo" width="360" height="360" />
        </div>
        <div className='col-sm-2'></div>
        <div className="col-sm-4 text-white mt-5 mb-4 rounded-top rounded-bottom orangeElement"> 
            <h2 className="text-3xl font-bold mb-4">About the Project</h2>
              <p className="text-lg mb-2">
                This project was born from extensive research into emotional development, user-centered design, and human-computer interaction. Our goal is to create a safe, supportive platform where children can explore and understand their emotions, and where parents can participate meaningfully in their child’s growth.
              </p>
              <p className="text-lg mb-2">
                Research activities included surveys, expert interviews, and iterative prototyping with families. The app uses a WIMP-style interface optimized for both desktop and touchscreens, ensuring accessibility across devices.
              </p>
              <p className="text-lg">
                Our design philosophy centers on learnability, efficiency, memorability, and emotional resonance—supported by visual cues, consistent icons, and calming feedback. This is more than a game—it's a bridge for emotional connection.
              </p>
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
