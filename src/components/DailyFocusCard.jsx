
import React from 'react';

const DailyFocusCard = () => {
  return (
    <div className="bg-[#1C1C1C] p-5 rounded-lg shadow-md text-gray-200">
      <h3 className="text-sm mb-2 uppercase text-gray-400">Your Daily Focus</h3>
      <ul className="list-disc list-inside text-sm space-y-1 mb-4">
        <li>Complete “Phase 1: Foundation”</li>
        <li>Connect with 3 Mentors</li>
      </ul>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div className="bg-yellow-400 h-2 rounded" style={{ width: '25%' }}></div>
      </div>
      <p className="text-xs text-right mt-1 text-gray-400">25% Complete</p>
      </div>
  );
};

export default DailyFocusCard;

