import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-teal-300 hover:text-white">Privacy Policy</a> | 
          <a href="/terms" className="text-teal-300 hover:text-white"> Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
