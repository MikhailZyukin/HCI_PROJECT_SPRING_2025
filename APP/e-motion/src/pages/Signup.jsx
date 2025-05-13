import { useState } from 'react';
import { Link } from 'react-router-dom';
import emotionLogo from '../assets/img/emotionLogo.svg';

export default function Signup() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <Link to="/">
            <img src={emotionLogo} alt="E-Motion Logo" width="60" height="60" />
          </Link>
          <h3 className="mt-3">Create your account</h3>
        </div>
        <form>
          <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <span>Already have an account? </span>
          <Link to="/login">Sign in.</Link>
        </div>
      </div>
    </div>
  );
}