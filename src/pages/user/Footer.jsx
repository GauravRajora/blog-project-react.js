import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-6 mt-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
        <div className="mt-3 space-x-2">
          <a href="/privacy-policy" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
            Privacy Policy
          </a>
          |
          <a href="/terms" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
