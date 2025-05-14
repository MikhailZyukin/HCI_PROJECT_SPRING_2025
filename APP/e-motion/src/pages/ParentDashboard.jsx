// src/pages/ParentDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import emotionLogo from '../assets/img/emotionLogo.svg';
import { AnimatePresence, motion } from 'framer-motion';

export default function ParentDashboard() {
  const [childName, setChildName] = useState('');
  const [children, setChildren] = useState(() => {
    const stored = localStorage.getItem('children');
    return stored ? JSON.parse(stored) : [];
  });

  const [reportChild, setReportChild] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reportData, setReportData] = useState({ progress: [], emotion: [] });

  const navigate = useNavigate();
const getChildData = (name) => {
    const progress = parseInt(localStorage.getItem(`progress_${name}`) || '0', 10);
    const emotion = localStorage.getItem(`emotion_${name}`) || 'N/A';
    const updated = localStorage.getItem(`updated_${name}`) || 'Never';
    return { progress, emotion, updated };
  };

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
    const name = childName.trim();
    if (name && !children.includes(name)) {
      setChildren([...children, name]);
      setChildName('');
    }
  };

  const removeChild = (index) => {
    const updated = [...children];
    updated.splice(index, 1);
    setChildren(updated);
  };

  const showReport = (child) => {
    const progress = JSON.parse(localStorage.getItem(`progressHistory_${child}`) || '[]');
    const emotion = JSON.parse(localStorage.getItem(`emotionHistory_${child}`) || '[]');
    setReportChild(child);
    setReportData({ progress, emotion });
    setShowModal(true);
  };

  const getEmotionBadge = (emotion) => {
    const map = {
      Happy: { label: 'Happy', color: 'success', icon: '😊' },
      Sad: { label: 'Sad', color: 'primary', icon: '😢' },
      Angry: { label: 'Angry', color: 'danger', icon: '😠' },
      Surprised: { label: 'Surprised', color: 'warning', icon: '😲' },
    };
    const item = map[emotion] || { label: emotion, color: 'secondary', icon: '❔' };
    return <span className={`badge bg-${item.color}`}>{item.icon} {item.label}</span>;
  };

  return (
    <div className="container-fluid p-5 bg-white">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <img src={emotionLogo} alt="E-Motion Logo" width="120" height="120" />
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            E-MOTION TEST
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
            {children.map((child, idx) => (
              <li key={idx}><button className="dropdown-item" onClick={() => navigate(`/child-dashboard?name=${encodeURIComponent(child)}`)}>{child}'s Dashboard</button></li>
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
            <button className="btn orangeButton text-white rounded-pill" onClick={addChild}>Add</button>
          </div>
        </div>
      </div>

      {children.length > 0 && (
        <div className="row g-3 justify-content-center">
          <AnimatePresence>
            {children.map((child, index) => {
              const progress = parseInt(localStorage.getItem(`progress_${child}`) || '0', 10);
              const emotion = localStorage.getItem(`emotion_${child}`) || 'N/A';
              const lastUpdated = localStorage.getItem(`updated_${child}`) || 'Never';

              return (
                <motion.div
                  key={child}
                  className="col-md-5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card shadow-sm border-0 rounded-4 h-100">
                    <div className="card-body">
                      <h5 className="card-title">{child}</h5>
                      <p className="card-text mb-1">
                        <strong>Emotion:</strong> {getEmotionBadge(emotion)}
                      </p>
                      <div className="mb-2">
                        <div className="progress" style={{ height: '8px' }}>
                          <div
                            className="progress-bar bg-info"
                            style={{ width: `${progress}%` }}
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small className="text-muted">Progress: {progress}%</small>
                      </div>
                      <small className="text-muted d-block mb-2">Last update: {lastUpdated}</small>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-sm orangeButton text-white rounded-pill" onClick={() => navigate(`/child-dashboard?name=${encodeURIComponent(child)}`)}>Login</button>
                        <button className="btn btn-sm orangeButton text-white rounded-pill" onClick={() => showReport(child)}>View Report</button>
                        <button className="btn btn-sm btn-danger rounded-pill" onClick={() => removeChild(index)}>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">{reportChild}'s Report</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <h6>📈 Progress History</h6>
                <ul>
                  {reportData.progress.length > 0 ? (
                    reportData.progress.map((p, i) => (
                      <li key={i}>Completed {p.progress}% at {p.time}</li>
                    ))
                  ) : (
                    <li>No progress yet</li>
                  )}
                </ul>
                <hr />
                <h6>😊 Emotion Check-ins</h6>
                <ul>
                  {reportData.emotion.length > 0 ? (
                    reportData.emotion.map((e, i) => (
                      <li key={i}>{e.emotion} at {e.time}</li>
                    ))
                  ) : (
                    <li>No emotions recorded</li>
                  )}
                </ul>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
