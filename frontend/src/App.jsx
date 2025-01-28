import React, { useState } from 'react';
import { Music } from 'lucide-react';
import Navigation from './components/Navigation';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/PlayerPage';
import LeaderboardPage from './pages/LeaderboardPage';
import CommunityPage from './pages/CommunityPage';
import FeedbackPage from './pages/FeedbackPage';
import 'animate.css';
import Carousel from './pages/Carousel';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="gradient-bg min-h-screen text-white">
      {!isAuthenticated ? (
        <AuthPage onLogin={handleLogin} />
      ) : (
        <>
          <Navigation 
            currentPage={currentPage} 
            onPageChange={setCurrentPage} 
            onLogout={handleLogout}
          />
          <div className="pt-24">
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'player' && <PlayerPage />}
            {currentPage === 'leaderboard' && <LeaderboardPage />}
            {currentPage === 'community' && <CommunityPage />}
            {currentPage === 'feedback' && <FeedbackPage />}
            {currentPage === 'carousel' && <Carousel></Carousel> }
          </div>
        </>
      )}
    </div>
  );
}

export default App;