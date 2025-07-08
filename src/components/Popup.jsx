import React, { useEffect } from 'react';

const Popup = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* Modal Content with scrolling */}
      <div className="relative z-10 flex max-h-[80vh] flex-col overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 pt-6 pb-4">
          <h2 className="flex-1 text-center text-2xl font-bold tracking-wide uppercase">{title}</h2>
          <button
            className="ml-4 text-2xl font-bold text-black focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
