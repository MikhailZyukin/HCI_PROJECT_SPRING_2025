// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import ParentLogin from './pages/ParentLogin.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/parent-login" element={<ParentLogin/>} />
      </Routes>
    </div>
  );
}

export default App;
