import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    totalPages > 1 && (
      <div className="mt-4 flex justify-between">
        <button
          className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    )
  );
};

export default Pagination;
