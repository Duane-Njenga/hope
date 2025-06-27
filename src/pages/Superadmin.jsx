import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaCalendarAlt, FaDonate, FaTrash, FaSignOutAlt } from 'react-icons/fa';

const SuperAdminPage = () => {
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const endpoints = {
        users: '/admin/users',
        events: '/admin/events',
        donations: '/admin/donations',
      };
      const response = await fetch(`http://localhost:5555${endpoints[activeTab]}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      if (activeTab === 'users') setUsers(data);
      if (activeTab === 'events') setEvents(data);
      if (activeTab === 'donations') setDonations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      const res = await fetch(`http://localhost:5555/admin/events/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Delete failed');
      setEvents(events.filter(e => e.id !== id));
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
      onClick={() => setActiveTab(tab)}
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
          <button onClick={handleLogout} className="text-red-500">Logout</button>
        </div>
      </header>

      <div className="flex gap-4 mb-6">
        <TabButton tab="users" icon={FaUsers} count={users.length} />
        <TabButton tab="events" icon={FaCalendarAlt} count={events.length} />
        <TabButton tab="donations" icon={FaDonate} count={donations.length} />
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

          {activeTab === 'events' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map(e => (
                <div key={e.id} className="border p-4 rounded relative">
                  <h3 className="font-bold mb-2">{e.type}</h3>
                  <p>{e.description}</p>
                  <p className="text-sm text-gray-500">{new Date(e.date).toLocaleDateString()}</p>
                  <button
                    onClick={() => handleDeleteEvent(e.id)}
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
                  <th>ID</th><th>Donor</th><th>Type</th><th>Amount/Description</th>
                </tr>
              </thead>
              <tbody>
                {donations.map(d => (
                  <tr key={d.id} className="border-t">
                    <td>{d.id}</td>
                    <td>{d.donor_name}</td>
                    <td>{d.donation_type}</td>
                    <td>{d.donation_type === 'Money' ? `KES ${d.amount}` : d.description}</td>
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
