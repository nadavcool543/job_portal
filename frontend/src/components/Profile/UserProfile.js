// src/components/Profile/UserProfile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
    experience: [],
    education: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchProfile();
  }, [navigate]);

  const fetchProfile = async () => {
    // Add API call to fetch profile
    setLoading(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Add API call to update profile
  };

  if (loading) return <div className="text-center py-8">טוען...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">הפרופיל שלי</h2>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
      )}
      <form onSubmit={handleUpdate} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">שם מלא</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">אימייל</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">טלפון</label>
          <input
            type="tel"
            className="w-full p-2 border rounded"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          שמור שינויים
        </button>
      </form>
    </div>
  );
};

export default UserProfile;