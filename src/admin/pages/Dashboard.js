import { useState } from 'react';
import '../styles/Admin.css';
import Messages from '../components/Messages/Messages';

function Dashboard() {
  const [stats] = useState({
    totalStudents: 1200,
    newAdmissions: 45,
    totalTeachers: 80,
    pendingApplications: 23
  });

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#students">Students</a></li>
            <li><a href="#faculty">Faculty</a></li>
            <li><a href="#news">News & Events</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      
      <main className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Students</h3>
            <p>{stats.totalStudents}</p>
          </div>
          <div className="stat-card">
            <h3>New Admissions</h3>
            <p>{stats.newAdmissions}</p>
          </div>
          <div className="stat-card">
            <h3>Total Teachers</h3>
            <p>{stats.totalTeachers}</p>
          </div>
          <div className="stat-card">
            <h3>Pending Applications</h3>
            <p>{stats.pendingApplications}</p>
          </div>
        </div>
        <Messages />
      </main>
    </div>
  );
}

export default Dashboard;
