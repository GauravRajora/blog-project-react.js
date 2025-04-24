import React, { useEffect, useState, useMemo } from 'react';
import Pagination from '../../components/admin/pagination.jsx';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('username');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users?page=${currentPage}&limit=10`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await res.json();
        setUsers(data.users || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Filter users based on the search query
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);

  // Sort users based on the selected field and order
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      const fieldA = a[sortField]?.toString().toLowerCase() || '';
      const fieldB = b[sortField]?.toString().toLowerCase() || '';
      if (sortOrder === 'asc') return fieldA > fieldB ? 1 : -1;
      else return fieldA < fieldB ? 1 : -1;
    });
  }, [filteredUsers, sortField, sortOrder]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User List</h2>

      {/* Search Input */}
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);  // Reset to first page on search
          }}
          placeholder="Search by username or email..."
          className="px-4 py-2 border rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-600">#</th>
              <th
                className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-600 cursor-pointer"
                onClick={() => handleSort('username')}
              >
                Username {sortField === 'username' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-600 cursor-pointer"
                onClick={() => handleSort('email')}
              >
                Email {sortField === 'email' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-600">Role</th>
              <th className="px-4 py-2 border-b text-center text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, idx) => (
              <tr className="hover:bg-gray-50" key={user._id || idx}>
                <td className="px-4 py-2 border-b">{(currentPage - 1) * 10 + idx + 1}</td>
                <td className="px-4 py-2 border-b">{user.username}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-sm border border-red-400">
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-2 border-b text-center space-x-2">
                  <button className="text-blue-500 text-sm hover:underline">Edit</button>
                  <button className="text-red-500 text-sm hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Users;
