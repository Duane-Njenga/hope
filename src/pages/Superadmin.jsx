import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaCalendarAlt, FaDonate, FaTrash, FaSignOutAlt } from 'react-icons/fa';

const SuperAdminPage = () => {
  const { logout, token } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

    const user = JSON.parse(localStorage.getItem("user"))

    
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const endpoints = {
        users: '/users',
        projects: '/projects',
        donations: '/donations',
      };
      const response = await fetch(`http://localhost:5555${endpoints[activeTab]}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
        if (activeTab === 'users') {
            setUsers(data)
            
        };
      if (activeTab === 'projects') setProjects(data);
        if (activeTab === 'donations') {
            setDonations(data);
            console.log(data);
            
        }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      const res = await fetch(`http://localhost:5555/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Delete failed');
      setProjects(projects.filter(p => p.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const TabButton = ({ tab, icon: Icon, count }) => (
    <button
          onClick={() => {
              setActiveTab(tab)
              console.log(activeTab);
          }
              
      }
      className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
    >
      <Icon className="inline mr-2" /> {tab.charAt(0).toUpperCase() + tab.slice(1)} ({count})
    </button>
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
        <div>
          <span className="mr-4">{user.email}</span>
          <button onClick={handleLogout} className="text-black bg-red-500 p-2 rounded-2xl hover:text-white hover:bg-red-600 cursor-pointer">Logout</button>
        </div>
      </header>

      <div className="flex gap-4 mb-6 " >
        <TabButton className="cursor-pointer" tab="users" icon={FaUsers} count={users.length} />
        <TabButton className="cursor-pointer" tab="projects" icon={FaCalendarAlt} count={projects.length} />
        <TabButton className="cursor-pointer" tab="donations" icon={FaDonate} count={donations.length} />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          {activeTab === 'users' && (
            <table className="w-full">
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Email</th><th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id} className="border-t">
                    <td>{u.id}</td>
                    <td>{u.first_name} {u.last_name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map(p => (
                <div key={p.id} className="border p-4 rounded relative">
                  <h3 className="font-bold mb-2">{p.type}</h3>
                  <p>{p.description}</p>
                  <p className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</p>
                  <button
                    onClick={() => handleDeleteEvent(p.id)}
                    className="absolute top-2 right-2 text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'donations' && (
            <table className="w-full">
              <thead>
                <tr>
                  <th>ID</th><th>Group</th><th>Type</th><th>Amount/Description</th>
                </tr>
              </thead>
              <tbody>
                {donations.map(d => (
                  <tr key={d.id} className="border-t">
                    <td>{d.id}</td>
                    <td>{d.group}</td>
                    <td>{d.type}</td>
                    <td>{d.type === 'money' ? `KES ${d.amount}` : d.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default SuperAdminPage;
