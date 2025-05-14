// src/pages/ChildDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaGamepad,
  FaChartLine,
  FaStar,
  FaRegSmile,
  FaRegFrown,
  FaRegMeh,
  FaRegSurprise,
  FaRegCommentDots,
  FaBook
} from 'react-icons/fa';

export default function ChildDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const childName = params.get('name') || 'Your Child';

  const getToday = () => new Date().toISOString().split('T')[0];

  const [progress, setProgress] = useState(() => {
    const lastDate = localStorage.getItem(`progressDate_${childName}`);
    const today = getToday();
    const stored = localStorage.getItem(`progress_${childName}`);
    return lastDate === today && stored ? parseInt(stored, 10) : 0;
  });

  const [emotion, setEmotion] = useState(() => {
    return localStorage.getItem(`emotion_${childName}`) || '';
  });

  useEffect(() => {
    const storedChildren = JSON.parse(localStorage.getItem('children') || '[]');
    if (!storedChildren.includes(childName)) {
      localStorage.setItem('children', JSON.stringify([...storedChildren, childName]));
    }
  }, [childName]);

  useEffect(() => {
    if (emotion) {
      const history = JSON.parse(localStorage.getItem(`emotionHistory_${childName}`) || '[]');
      history.push({ emotion, time: new Date().toLocaleString() });
      localStorage.setItem(`emotionHistory_${childName}`, JSON.stringify(history));
      localStorage.setItem(`emotion_${childName}`, emotion);
    }
  }, [emotion, childName]);

  useEffect(() => {
    if (progress > 0) {
      const today = getToday();
      const progressLog = JSON.parse(localStorage.getItem(`progressHistory_${childName}`) || '[]');
      progressLog.push({ progress, time: new Date().toLocaleString() });
      localStorage.setItem(`progressHistory_${childName}`, JSON.stringify(progressLog));
      localStorage.setItem(`progress_${childName}`, progress);
      localStorage.setItem(`progressDate_${childName}`, today);
    }
  }, [progress, childName]);

  useEffect(() => {
    if (progress > 0 || emotion) {
      localStorage.setItem(`updated_${childName}`, new Date().toLocaleString());
    }
  }, [progress, emotion, childName]);

  const handleQuit = () => {
    navigate('/parent-dashboard');
  };

  const handleGameComplete = () => {
    setProgress(prev => Math.min(prev + 10, 100));
  };

  const handleEmotionSelect = (selected) => {
    setEmotion(selected);
  };

  return (
    <div className="container-fluid p-4 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3><FaRegSmile className="me-2 text-primary" /> Hello, {childName}! <span role="img" aria-label="wave">👋</span></h3>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="childDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Options
          </button>
          <ul className="dropdown-menu" aria-labelledby="childDropdown">
            <li><button className="dropdown-item" onClick={handleQuit}>Quit to Parent Dashboard</button></li>
          </ul>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm">
            <h5><FaGamepad className="me-2" />Play Games</h5>
            <button className="btn btn-outline-primary w-100 my-2" onClick={handleGameComplete}>Emotion Match</button>
            <button className="btn btn-outline-primary w-100" onClick={handleGameComplete}>Face Explorer</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm">
            <h5><FaChartLine className="me-2" />My Progress</h5>
            <div className="bg-light p-4 text-muted text-center rounded">
              {progress}% completed
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm">
            <h5><FaStar className="me-2" />Achievements</h5>
            <div className="d-flex justify-content-around">
              <span className="badge bg-secondary">Level {Math.floor(progress / 20) + 1}</span>
              <span className="badge bg-secondary">{progress / 10} Games</span>
              <span className="badge bg-secondary">{progress >= 100 ? 'Pro' : 'Beginner'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm">
            <h5>Daily Check-in</h5>
            <p>How are you feeling today?</p>
            <div className="d-flex justify-content-between px-3">
              <div><button className="btn btn-sm" onClick={() => handleEmotionSelect('Happy')}><FaRegSmile /> Happy</button></div>
              <div><button className="btn btn-sm" onClick={() => handleEmotionSelect('Sad')}><FaRegFrown /> Sad</button></div>
              <div><button className="btn btn-sm" onClick={() => handleEmotionSelect('Angry')}><FaRegMeh /> Angry</button></div>
              <div><button className="btn btn-sm" onClick={() => handleEmotionSelect('Surprised')}><FaRegSurprise /> Surprised</button></div>
            </div>
            {emotion && <p className="mt-3 text-center">You feel <strong>{emotion}</strong> today.</p>}
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm">
            <h5><FaRegCommentDots className="me-2" />Message from Parent</h5>
            <blockquote className="blockquote">
              <p className="mb-1">"Great job on your games today! Let's talk about what you learned. ❤️"</p>
              <footer className="blockquote-footer">Mom <cite>2 hours ago</cite></footer>
            </blockquote>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-white rounded shadow-sm">
            <h5><FaBook className="me-2" />Story Time</h5>
            <div className="bg-light p-4 text-muted text-center rounded">Interactive Story</div>
          </div>
        </div>
      </div>

      <footer className="mt-5 text-center text-muted">
        © 2025 E-Motion. All rights reserved.
      </footer>
    </div>
  );
}
