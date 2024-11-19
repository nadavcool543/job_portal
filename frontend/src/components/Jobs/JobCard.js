
// src/components/Jobs/JobCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    // Handle job application
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
      <div className="text-gray-600 mb-4">
        <p className="mb-1">{job.company}</p>
        <p className="mb-1">{job.location}</p>
        <p>{job.type}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{job.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements.map((req, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {req}
          </span>
        ))}
      </div>
      <button
        onClick={handleApply}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        הגש מועמדות
      </button>
    </div>
  );
};

export default JobCard;