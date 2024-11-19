import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link to="/">פורטל משרות</Link>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link to="/jobs" className="text-gray-700 hover:text-gray-900">משרות</Link>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900">פרופיל</Link>
            <Link to="/chat" className="text-gray-700 hover:text-gray-900">צ'אט</Link>
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              התחברות
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;