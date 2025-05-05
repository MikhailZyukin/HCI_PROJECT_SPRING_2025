import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3>📊 Dashboard</h3>
        <ul>
          <li>Activities</li>
          <li>Messages</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main-panel">
        <div className="stats">
          <div className="card">Weekly Progress<br />85%</div>
          <div className="card">Activities Completed<br />24</div>
          <div className="card">Emotion Score<br />4.8/5</div>
        </div>

        <div className="tracker-section">
          <h4>Emotion Tracking</h4>
          <div className="placeholder">[Chart Here]</div>
        </div>

        <div className="recent-activities">
          <h4>Recent Activities</h4>
          <ul>
            <li>🕹️ Completed "Happy Heroes"</li>
            <li>📖 Story Time: The Kind Bear</li>
            <li>🧩 Emotion Puzzle Challenge</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

