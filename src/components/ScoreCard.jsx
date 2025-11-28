
import React from 'react';
import Card from './Card';

const ScoreCard = () => {
  return (
    <div className="bg-[#1C1C1C] p-5 rounded-lg shadow-md text-gray-200">
      <h3 className="text-sm mb-2 uppercase text-gray-400">PAL Score</h3>
      <p className="text-4xl font-bold text-yellow-400">820</p>
      <p className="text-sm text-yellow-600 mt-1">Expert Level</p>
      <p className="text-xs text-gray-500 mt-4">
        Proven track record for tier two tiered triads across multiple stacks.
      </p>
    </div>
    //  <Card title="PAL Score">
    //   <p className="text-4xl font-bold text-yellow-400">820</p>
    //   <p className="text-sm text-yellow-600 mt-1">Expert Level</p>
    //   <p className="text-xs text-gray-500 mt-4">
    //     Proven track record for tier two tiered triads across multiple stacks.
    //   </p>
    // </Card>
  );
};

export default ScoreCard;

