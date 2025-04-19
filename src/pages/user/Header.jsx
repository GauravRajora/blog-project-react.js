import React from 'react';

const Header = () => {
  return (
    <header className="bg-teal-500 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-teal-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
