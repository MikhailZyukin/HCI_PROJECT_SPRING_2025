// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import ParentLogin from './pages/Login.jsx';
import Features from './pages/Features.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/" element={<Home/>} />
        <Route path="/parent-login" element={<ParentLogin/>} />
      </Routes>
    </div>
  );
}

export default App;
