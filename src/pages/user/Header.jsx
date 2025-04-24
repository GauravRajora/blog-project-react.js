import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-gray-800 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600 transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
