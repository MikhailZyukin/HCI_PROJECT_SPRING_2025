import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function FaceExplorer() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const childName = params.get('name') || 'Your Child';

  const getToday = () => new Date().toISOString().split('T')[0];

  const handleComplete = () => {
    const currentProgress = parseInt(localStorage.getItem(`progress_${childName}`) || '0', 10);
    const newProgress = Math.min(currentProgress + 10, 100);
    localStorage.setItem(`progress_${childName}`, newProgress.toString());
    localStorage.setItem(`progressDate_${childName}`, getToday());
    navigate(`/child-dashboard?name=${encodeURIComponent(childName)}`);
  };

  return (
    <div className="container py-5 text-center">
      <h2>🧠 Face Explorer</h2>
      <p className="text-muted">Click on faces to learn emotions.</p>
      <div className="my-4">
        <p>[Game UI Placeholder]</p>
        <button className="btn btn-success" onClick={handleComplete}>Complete Game</button>
      </div>
    </div>
  );
}