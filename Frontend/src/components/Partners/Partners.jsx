// src/components/Partners/Partners.jsx
import React from 'react';
import partnerImage from '../../assets/brand/br-1.png'; // Adjust path if needed

const Partners = () => {
  return (
    <section className="p-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
      <div className="flex overflow-x-auto space-x-6">
        <img src={partnerImage} alt="Partner" className="h-16" />
        {/* Add more partner images as needed */}
      </div>
    </section>
  );
};

export default Partners;
