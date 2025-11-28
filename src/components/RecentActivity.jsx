
import React from 'react';

const RecentActivity = () => {
  const activities = [
    { time: '2h ago', action: 'Completed "Module 2: Data Handling"' },
    { time: '5h ago', action: 'Joined the "Leadership Ladder" path' },
    { time: '1d ago', action: 'PAL Score increased to 820' },
  ];

  return (
    <div className="bg-[#1C1C1C] p-5 rounded-lg shadow-md text-gray-200">
      <h3 className="text-sm mb-4 uppercase text-gray-400">recent Activity</h3>
      <ul className="space-y-3">
        {activities.map((item, idx) => (
          <li key={idx} className="flex justify-between text-sm border-b border-gray-700 pb-2">
            <span>{item.action}</span>
            <span className="text-gray-500">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;