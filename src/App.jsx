import React from 'react';
import Dashboard from './pages/Dashboard.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import ScoreCard from './components/ScoreCard.jsx';
import DailyFocusCard from './components/DailyFocusCard.jsx';
import TrendingPaths from './components/TrendingPaths.jsx';
import RecentActivity from './components/RecentActivity.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Dashboard />
    </div>
  );
}

export default App;