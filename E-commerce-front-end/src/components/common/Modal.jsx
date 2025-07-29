import React from 'react';
import Button from './Button.jsx';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <Button variant="secondary" onClick={onClose}>X</Button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;