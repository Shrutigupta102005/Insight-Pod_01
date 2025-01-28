import React from 'react';
import { Music } from 'lucide-react';

function Navigation({ currentPage, onPageChange, onLogout }) {
  return (
    <nav className="glass-effect fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Music className="w-8 h-8" />
            <span className="text-2xl font-bold">InsightPod</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => onPageChange('home')}
              className={`nav-link ${currentPage === 'home' ? 'text-cyan-400' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('player')}
              className={`nav-link ${currentPage === 'player' ? 'text-cyan-400' : ''}`}
            >
              Player
            </button>
            <button 
              onClick={() => onPageChange('leaderboard')}
              className={`nav-link ${currentPage === 'leaderboard' ? 'text-cyan-400' : ''}`}
            >
              Leaderboard
            </button>
            <button 
              onClick={() => onPageChange('community')}
              className={`nav-link ${currentPage === 'community' ? 'text-cyan-400' : ''}`}
            >
              Community
            </button>
            <button 
              onClick={() => onPageChange('feedback')}
              className={`nav-link ${currentPage === 'feedback' ? 'text-cyan-400' : ''}`}
            >
              Feedback
            </button>
            <button 
              onClick={() => onPageChange('carousel')}
              className={`nav-link ${currentPage === 'carousel' ? 'text-cyan-400' : ''}`}
            >
              carousel
            </button>
            <button 
              onClick={onLogout}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;