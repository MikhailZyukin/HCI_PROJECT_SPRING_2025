import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EMOTION_QUESTIONS = [
  { emoji: '😊', answer: 'Happy' },
  { emoji: '😢', answer: 'Sad' },
  { emoji: '😠', answer: 'Angry' },
  { emoji: '😲', answer: 'Surprised' },
  { emoji: '😐', answer: 'Neutral' },
];

const OPTIONS = ['Happy', 'Sad', 'Angry', 'Surprised', 'Neutral'];

const getToday = () => new Date().toISOString().split('T')[0];

export default function FaceExplorer() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const childName = params.get('name') || 'Your Child';

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const current = EMOTION_QUESTIONS[index];

  const handleSelect = (option) => {
    if (showFeedback) return;

    setSelected(option);
    const correct = option === current.answer;

    const audio = new Audio(`/assets/sfx/${correct ? 'correct' : 'wrong'}.mp3`);
    audio.play();

    if (correct) setScore(prev => prev + 1);

    setShowFeedback(true);
    setTimeout(() => {
      if (index + 1 < EMOTION_QUESTIONS.length) {
        setIndex(prev => prev + 1);
        setSelected('');
        setShowFeedback(false);
      } else {
        const doneSound = new Audio('/assets/sfx/completed.mp3');
        doneSound.play();
        setTimeout(() => {
          const currentProgress = parseInt(localStorage.getItem(`progress_${childName}`) || '0', 10);
          const newProgress = Math.min(currentProgress + 10, 100);
          localStorage.setItem(`progress_${childName}`, newProgress.toString());
          localStorage.setItem(`progressDate_${childName}`, getToday());
          navigate(`/child-dashboard?name=${encodeURIComponent(childName)}`);
        }, 1500);
      }
    }, 1000);
  };

  return (
    <div className="container py-5 text-center">
      <h2>🧠 Face Explorer</h2>
      <p className="text-muted">Guess the emotion from the face shown.</p>

      <div className="display-1 my-4">{current.emoji}</div>

      <div className="row justify-content-center">
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            disabled={showFeedback}
            className={`btn m-2 rounded-pill px-4 py-2
              ${selected === opt
                ? (opt === current.answer ? 'btn-success' : 'btn-danger')
                : 'btn-outline-primary'}
            `}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h5>Score: {score} / {EMOTION_QUESTIONS.length}</h5>
      </div>
    </div>
  );
}