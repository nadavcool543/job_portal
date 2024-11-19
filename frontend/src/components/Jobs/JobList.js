// src/components/Jobs/JobList.jsx
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobSearch from './JobSearch';
import { getJobs } from '../../services/jobService';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (err) {
      setError('שגיאה בטעינת המשרות');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (filters) => {
    setLoading(true);
    try {
      const data = await getJobs(filters);
      setJobs(data);
    } catch (err) {
      setError('שגיאה בחיפוש');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-8">טוען...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <JobSearch onSearch={handleSearch} />
      <div className="grid gap-6 mt-8">
        {jobs.length === 0 ? (
          <div className="text-center py-8">לא נמצאו משרות</div>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default JobList;
