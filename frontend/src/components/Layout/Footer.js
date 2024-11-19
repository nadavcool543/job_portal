import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">פורטל משרות</h3>
            <p className="text-gray-300">מצא את העבודה הבאה שלך</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-2">צור קשר</h3>
            <p className="text-gray-300">support@jobportal.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2024 Job Portal. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;