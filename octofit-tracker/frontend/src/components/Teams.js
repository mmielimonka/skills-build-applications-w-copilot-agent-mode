import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const url = codespace ? `https://${codespace}-8000.app.github.dev/api/teams/` : 'http://localhost:8000/api/teams/';
    console.log('Fetching Teams from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Teams data:', data);
        setTeams(data.results ? data.results : data);
      });
  }, []);
  return (
    <div>
      <h2 className="mb-3" style={{color: 'var(--prodyna-accent)', fontWeight: 700, letterSpacing: '0.03em', animation: 'titleSlideIn 1.2s'}}>Teams</h2>
      <table className="table table-striped table-bordered" style={{animation: 'cardPop 0.8s'}}> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((t, idx) => (
            <tr key={idx}>
              <td>{t.name}</td>
              <td>{Array.isArray(t.members) ? t.members.join(', ') : t.members}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Teams;
