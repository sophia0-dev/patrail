
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ScoreCard from '../components/ScoreCard';
import DailyFocusCard from '../components/DailyFocusCard';
import TrendingPaths from '../components/TrendingPaths';
import RecentActivity from '../components/RecentActivity';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <section className="my-6">
          <h1 className="text-3xl font-semibold mb-2">Welcome to your Ascension</h1>
          <p className="text-gray-400 mb-4">Structured Growth. Real Progress. Your Legacy.</p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded">Start Your Pathway</button>
        </section>

        <div className="grid grid-cols-3 gap-6">
          <DailyFocusCard />
          <TrendingPaths />
          <ScoreCard />
          </div>
vtttyjjg
        <div className="mt-6">
          <RecentActivity />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;