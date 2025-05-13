// src/pages/ParentDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaChartLine, FaPuzzlePiece, FaBookOpen, FaEye, FaTrashAlt } from 'react-icons/fa';
import emotionLogo from '../assets/img/emotionLogo.svg';
import { AnimatePresence, motion } from 'framer-motion';

export default function ParentDashboard() {
  const [childName, setChildName] = useState('');
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const storedChildren = JSON.parse(localStorage.getItem('children') || '[]');
    setChildren(storedChildren);
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('children');
    if (stored) setChildren(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('children', JSON.stringify(children));
  }, [children]);

  const handleLogout = () => {
    navigate('/login');
  };

  const goToChildDashboard = (name) => {
    navigate(`/child-dashboard?name=${encodeURIComponent(name)}`);
  };

  const addChild = () => {
    if (childName.trim() && !children.includes(childName.trim())) {
      setChildren([...children, childName.trim()]);
      setChildName('');
    }
  };

  const removeChild = (index) => {
    const updated = [...children];
    updated.splice(index, 1);
    setChildren(updated);
  };

  return (
    <div className="container-fluid p-4 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <img src={emotionLogo} alt="E-Motion Logo" width="120" height="120" />
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            E-MOTION TEST
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
            {children.map((child, idx) => (
              <li key={idx}><button className="dropdown-item" onClick={() => goToChildDashboard(child)}>{child}'s Dashboard</button></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-4 text-center">
        <h5>Add Child</h5>
        <div className="d-flex justify-content-center">
          <div className="input-group mb-3" style={{ maxWidth: '400px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter child name"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addChild}>Add</button>
          </div>
        </div>
        {children.length > 0 && (
          <div className="d-flex justify-content-center">
            <ul className="list-group" style={{ maxWidth: '400px' }}>
              <AnimatePresence>
                {children.map((child, index) => (
                  <motion.li
                    key={child}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {child}
                    <button className="btn btn-sm btn-outline-danger" onClick={() => removeChild(index)}>
                      <FaTrashAlt />
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}