import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Users', path: '/admin/users' },
    { name: 'Blog', path: '/admin/blog' },
    // Add more routes here
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 shadow-md bg-gray-800 p-4 hidden sm:block">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Blog Admin</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded text-white hover:bg-teal-100 hover:text-teal-600 ${
                pathname === item.path ? 'bg-blue text-teal-600 font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-gray-300 shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <Link to="/login" className="text-gray-700 hover:text-teal-600">Login</Link>
        </header>

        {/* Page content */}
        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white text-center text-sm text-gray-500 py-3 border-t">
          © {new Date().getFullYear()} Blog Admin Panel
        </footer>
      </div>
    </div>
  );
};

export default Layout;
