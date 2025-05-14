import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import emotionLogo from '../assets/img/emotionLogo.svg';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'parent' && password === '123abc') {
      navigate('/parent-dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    

    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <Link to="/">
            <img src={emotionLogo} alt="E-Motion Logo" width="120" height="120" />
          </Link>
          <h3 className="mt-3">Sign in to E-Motion</h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label>Username or email address</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn text-white rounded-pill orangeButton w-100 d-flex justify-content-center">Sign In</button>
        </form>
        <div className="text-center mt-3">
          <span>New to E-Motion? </span>
          <Link to="/signup">Create an account.</Link>
        </div>
      </div>
    </div>
  );
}
