
// src/components/Jobs/JobSearch.jsx
import React, { useState } from 'react';

const JobSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 mb-2">מילות מפתח</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={filters.keyword}
            onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
            placeholder="תפקיד, חברה, או מיומנות"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">מיקום</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            placeholder="עיר או אזור"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">סוג משרה</label>
          <select
            className="w-full p-2 border rounded"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">הכל</option>
            <option value="full-time">משרה מלאה</option>
            <option value="part-time">משרה חלקית</option>
            <option value="contract">חוזה</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        חפש
      </button>
    </form>
  );
};

export default JobSearch;