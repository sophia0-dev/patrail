import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-[#1C1C1C] p-5 rounded-lg shadow-md text-gray-200">
      <h3 className="text-sm mb-4 uppercase text-gray-400">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
