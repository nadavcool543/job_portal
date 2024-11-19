// src/components/Layout/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg p-6">
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h2 className="font-bold text-lg mb-2">סינון</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">מיקום</span>
              <select className="mt-1 block w-full rounded-md border-gray-300">
                <option>הכל</option>
                <option>תל אביב</option>
                <option>ירושלים</option>
                <option>חיפה</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;