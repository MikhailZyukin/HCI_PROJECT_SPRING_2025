import { Link } from 'react-router-dom';
import emotionLogo from '../assets/img/emotionLogo.svg';

export default function Home() {
  return (
    <div className="w-100 min-vh-100 m-0 p-0">
      {/* Transparent Navbar with styled buttons */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent w-100">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={emotionLogo} alt="E-Motion Logo" width="40" height="40" className="me-2" />
            <span className="fs-4 fw-bold text-white">E - Motion</span>
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Features</a>
              </li>
            </ul>
            <Link to="/parent-login" className="btn text-white rounded-pill" style={{ backgroundColor: '#FF6600' }}>
              Login / Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="container-fluid p-0">
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="d-block w-100" style={{ height: '400px' }} xmlns="http://www.w3.org/2000/svg"
                role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">First Slide Placeholder</text>
              </svg>
            </div>
            <div className="carousel-item">
              <svg className="d-block w-100" style={{ height: '400px' }} xmlns="http://www.w3.org/2000/svg"
                role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">Second Slide Placeholder</text>
              </svg>
            </div>
            <div className="carousel-item">
              <svg className="d-block w-100" style={{ height: '400px' }} xmlns="http://www.w3.org/2000/svg"
                role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#999" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">Third Slide Placeholder</text>
              </svg>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
