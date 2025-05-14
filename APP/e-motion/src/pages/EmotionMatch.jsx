
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EMOTIONS = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😠', label: 'Angry' },
  { emoji: '😲', label: 'Surprised' },
];

const getToday = () => new Date().toISOString().split('T')[0];

export default function EmotionMatch() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const childName = params.get('name') || 'Your Child';

  const [dragged, setDragged] = useState(null);
  const [score, setScore] = useState(0);
  const [matched, setMatched] = useState([]);

  const playSound = (type) => {
    const audio = new Audio(type === 'correct'
      ? '/assets/sfx/correct.mp3'
      : '/assets/sfx/wrong.mp3');
    audio.play();
  };

  const handleDrop = (label) => {
    if (!dragged) return;
    if (dragged.label === label && !matched.includes(label)) {
      playSound('correct');
      setMatched([...matched, label]);
      setScore(prev => prev + 1);
      if (matched.length + 1 === EMOTIONS.length) {
        const completeSound = new Audio('/assets/sfx/completed.mp3');
        completeSound.play();
        setTimeout(() => {
          const currentProgress = parseInt(localStorage.getItem(`progress_${childName}`) || '0', 10);
          const newProgress = Math.min(currentProgress + 10, 100);
          localStorage.setItem(`progress_${childName}`, newProgress.toString());
          localStorage.setItem(`progressDate_${childName}`, getToday());
          navigate(`/child-dashboard?name=${encodeURIComponent(childName)}`);
        }, 1500);
      }
    } else {
      playSound('wrong');
    }
    setDragged(null);
  };

  const completeGame = () => {
    const currentProgress = parseInt(localStorage.getItem(`progress_${childName}`) || '0', 10);
    const newProgress = Math.min(currentProgress + 10, 100);
    localStorage.setItem(`progress_${childName}`, newProgress.toString());
    localStorage.setItem(`progressDate_${childName}`, getToday());
    navigate(`/child-dashboard?name=${encodeURIComponent(childName)}`);
  };

  return (
    <div className="container py-5 text-center">
      <h2>😊 Emotion Match Game</h2>
      <p className="text-muted">Drag the emoji to its correct emotion.</p>

      <div className="row justify-content-center mb-5">
        {EMOTIONS.map(({ emoji, label }) => (
          !matched.includes(label) && (
            <div
              key={label}
              className="col-2 display-3"
              draggable
              onDragStart={() => setDragged({ emoji, label })}
              style={{ cursor: 'grab' }}
            >
              {emoji}
            </div>
          )
        ))}
      </div>

      <div className="row justify-content-center">
        {EMOTIONS.map(({ label }) => (
          <div
            key={label}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleDrop(label)}
            className="col-2 border p-3 rounded-pill mx-2"
            style={{
              backgroundColor: matched.includes(label) ? '#d4edda' : '#f8f9fa',
              borderColor: '#ced4da',
              minHeight: '60px',
            }}
          >
            <strong>{label}</strong>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h5>Score: {score}</h5>
        {matched.length === EMOTIONS.length && (
          <button className="btn btn-success mt-3" onClick={completeGame}>🎉 Finish Game</button>
        )}
      </div>
    </div>
  );
}
