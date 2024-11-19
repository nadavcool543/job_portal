import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header.js';
import Footer from './components/Layout/Footer.js';
import JobList from './components/Jobs/JobList.js';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';
import UserProfile from './components/Profile/UserProfile.js';
import ChatBox from './components/Chat/ChatBox.js';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 rtl" dir="rtl">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/chat" element={<ChatBox />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;