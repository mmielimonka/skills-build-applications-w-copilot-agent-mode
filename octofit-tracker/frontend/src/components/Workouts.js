import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const url = codespace ? `https://${codespace}-8000.app.github.dev/api/workouts/` : 'http://localhost:8000/api/workouts/';
    console.log('Fetching Workouts from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts data:', data);
        setWorkouts(data.results ? data.results : data);
      });
  }, []);
  return (
    <div>
      <h2 className="mb-3" style={{color: 'var(--prodyna-accent)', fontWeight: 700, letterSpacing: '0.03em', animation: 'titleSlideIn 1.2s'}}>Workouts</h2>
      <table className="table table-striped table-bordered" style={{animation: 'cardPop 0.8s'}}> 
        <thead>
          <tr>
            <th>User Email</th>
            <th>Workout</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w, idx) => (
            <tr key={idx}>
              <td>{w.user_email}</td>
              <td>{w.workout}</td>
              <td>{w.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Workouts;
