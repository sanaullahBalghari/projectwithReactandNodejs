import React from 'react';

function Badge({ children, status = 'default' }) {
  const statusStyles = {
    default: 'bg-gray-200 text-gray-800',
    pending: 'bg-yellow-200 text-yellow-800',
    shipped: 'bg-blue-200 text-blue-800',
    delivered: 'bg-green-200 text-green-800',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {children}
    </span>
  );
}

export default Badge;