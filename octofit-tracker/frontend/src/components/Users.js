import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const url = codespace ? `https://${codespace}-8000.app.github.dev/api/users/` : 'http://localhost:8000/api/users/';
    console.log('Fetching Users from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Users data:', data);
        setUsers(data.results ? data.results : data);
      });
  }, []);
  return (
    <div>
      <h2 className="mb-3" style={{color: 'var(--prodyna-accent)', fontWeight: 700, letterSpacing: '0.03em', animation: 'titleSlideIn 1.2s'}}>Users</h2>
      <table className="table table-striped table-bordered" style={{animation: 'cardPop 0.8s'}}> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={idx}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
