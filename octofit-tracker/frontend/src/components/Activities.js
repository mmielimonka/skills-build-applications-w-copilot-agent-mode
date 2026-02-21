import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const url = codespace ? `https://${codespace}-8000.app.github.dev/api/activities/` : 'http://localhost:8000/api/activities/';
    console.log('Fetching Activities from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Activities data:', data);
        setActivities(data.results ? data.results : data);
      });
  }, []);
  return (
    <div>
      <h2 className="mb-3" style={{color: 'var(--prodyna-accent)', fontWeight: 700, letterSpacing: '0.03em', animation: 'titleSlideIn 1.2s'}}>Activities</h2>
      <table className="table table-striped table-bordered" style={{animation: 'cardPop 0.8s'}}> 
        <thead>
          <tr>
            <th>User Email</th>
            <th>Activity</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a, idx) => (
            <tr key={idx}>
              <td>{a.user_email}</td>
              <td>{a.activity}</td>
              <td>{a.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Activities;
