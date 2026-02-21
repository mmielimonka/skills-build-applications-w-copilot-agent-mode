import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const url = codespace ? `https://${codespace}-8000.app.github.dev/api/leaderboard/` : 'http://localhost:8000/api/leaderboard/';
    console.log('Fetching Leaderboard from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard data:', data);
        setLeaderboard(data.results ? data.results : data);
      });
  }, []);
  return (
    <div>
      <h2 className="mb-3" style={{color: 'var(--prodyna-accent)', fontWeight: 700, letterSpacing: '0.03em', animation: 'titleSlideIn 1.2s'}}>Leaderboard</h2>
      <table className="table table-striped table-bordered" style={{animation: 'cardPop 0.8s'}}> 
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((l, idx) => (
            <tr key={idx}>
              <td>{l.team}</td>
              <td>{l.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Leaderboard;
