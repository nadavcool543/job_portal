
// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (userData.password !== userData.passwordConfirm) {
      setError('הסיסמאות אינן תואמות');
      return;
    }

    try {
      await register(userData);
      navigate('/login');
    } catch (err) {
      setError('שגיאה בהרשמה. אנא נסה שנית');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">הרשמה</h2>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">שם מלא</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">אימייל</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">סיסמה</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">אימות סיסמה</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={userData.passwordConfirm}
            onChange={(e) => setUserData({ ...userData, passwordConfirm: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          הרשם
        </button>
      </form>
    </div>
  );
};

export default Register;