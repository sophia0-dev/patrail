
import React from 'react';

const TrendingPaths = () => {
  const paths = [
    {
      title: "The Developer's Arc",
      desc: "Mastering full-stack development fundamentals.",
    },
    {
      title: "Leadership Ladder",
      desc: "Build your influence and team strategy.",
    },
  ];

  return (
    <div className="bg-[#1C1C1C] p-5 rounded-lg shadow-md text-gray-200">
      <h3 className="text-sm mb-4 uppercase text-gray-400">Trending Paths</h3>
      <div className="space-y-4">
        {paths.map((path, idx) => (
          <div key={idx} className="bg-[#2A2A2A] p-3 rounded hover:bg-[#333] transition">
            <h4 className="text-md font-semibold text-yellow-400">{path.title}</h4>
            <p className="text-sm text-gray-400">{path.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPaths;

