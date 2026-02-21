
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Activities from './components/Activities';
import Teams from './components/Teams';
import Users from './components/Users';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        {/* Navigation - prodyna style */}
        <nav className="navbar navbar-expand-lg mb-4">
          <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Big title pane - prodyna style */}
        <div className="title-pane mx-auto mb-4">
          <h1>We supercharge your fitness journey</h1>
          <p>OctoFit Tracker: Empowering teams, tracking progress, and inspiring healthy competition. Join, log, and lead!</p>
        </div>

        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div>
              <div className="card mb-4 mx-auto" style={{maxWidth: '400px'}}>
                <div className="card-body">
                  <h5 className="card-title">Track Your Fitness</h5>
                  <p className="card-text">Log activities, join teams, and climb the leaderboard!</p>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
