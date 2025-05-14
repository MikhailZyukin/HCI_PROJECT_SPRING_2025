// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Features from './pages/Features.jsx';
import About from './pages/About.jsx';
import Signup from './pages/Signup.jsx';
import ParentDashboard from './pages/ParentDashboard.jsx';
import ChildDashboard from './pages/ChildDashboard.jsx';
import FaceExplorer from './pages/FaceExplorer.jsx';
import EmotionMatch from './pages/EmotionMatch.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/face-explorer" element={<FaceExplorer />} />
        <Route path="/emotion-match" element={<EmotionMatch />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
