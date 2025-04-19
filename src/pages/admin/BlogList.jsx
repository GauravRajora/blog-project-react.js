import React, { useState, useMemo } from 'react';
import Pagination from '../../components/admin/pagination';

const BlogList = ({ blogs, currentPage, totalPages, setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

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

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author?.username?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [blogs, searchQuery]);

  const sortedBlogs = useMemo(() => {
    return [...filteredBlogs].sort((a, b) => {
      const fieldA = a[sortField]?.toString().toLowerCase() || '';
      const fieldB = b[sortField]?.toString().toLowerCase() || '';
      if (sortOrder === 'asc') return fieldA > fieldB ? 1 : -1;
      else return fieldA < fieldB ? 1 : -1;
    });
  }, [filteredBlogs, sortField, sortOrder]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Blog List</h2>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
        }}
        placeholder="Search by title or author..."
        className="mb-4 px-4 py-2 border rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
      />
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-600">#</th>
            <th
              className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-600 cursor-pointer"
              onClick={() => handleSort('title')}
            >
              Title {sortField === 'title' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-600">Description</th>
            <th
              className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-600 cursor-pointer"
              onClick={() => handleSort('author')}
            >
              Author {sortField === 'author' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th className="px-4 py-2 border-b text-center text-sm font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedBlogs.map((blog, idx) => (
            <tr className="hover:bg-gray-50" key={blog._id || idx}>
              <td className="px-4 py-2 border-b">{(currentPage - 1) * 10 + idx + 1}</td>
              <td className="px-4 py-2 border-b">{blog.title}</td>
              <td className="px-4 py-2 border-b">{blog.description}</td>
              <td className="px-4 py-2 border-b capitalize">{blog.author?.username || 'Unknown'}</td>
              <td className="px-4 py-2 border-b text-center space-x-2">
                <button className="text-blue-500 text-sm hover:underline">Edit</button>
                <button className="text-red-500 text-sm hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;
