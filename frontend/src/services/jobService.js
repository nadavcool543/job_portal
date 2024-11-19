
// src/services/jobService.js
import api from './api';

export const getJobs = async (filters = {}) => {
  const response = await api.get('/jobs/jobs', { params: filters });
  return response.data;
};

export const getJob = async (id) => {
  const response = await api.get(`/jobs/jobs/${id}`);
  return response.data;
};

export const applyToJob = async (jobId) => {
  const response = await api.post(`/jobs/jobs/${jobId}/apply`);
  return response.data;
};