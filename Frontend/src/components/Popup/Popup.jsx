// src/components/Popup/Popup.jsx
import React from 'react';

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${orderPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-white text-black p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Order Now</h2>
        {/* Popup content */}
        <button onClick={handleOrderPopup} className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors">Close</button>
      </div>
    </div>
  );
};

export default Popup;
