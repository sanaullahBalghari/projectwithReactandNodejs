import React from 'react';
import Button from '../common/Button.jsx';

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; // Don't render if only one page

  const pages = [];

  // Show a window of max 5 pages: [currentPage - 2 ... currentPage + 2]
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center space-x-2 mt-6 flex-wrap">
      <Button
        variant="secondary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "primary" : "secondary"}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="secondary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
