import React, { useState, useRef } from 'react';

function PlayerPage() {
  const [progress, setProgress] = useState(45);
  const progressBarRef = useRef(null);

  const handleProgressClick = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setProgress(Math.min(100, Math.max(0, percentage)));
  };

  return (
    <div className="container mx-auto px-6">
      <div className="glass-effect rounded-xl p-8">
        <div className="flex items-start space-x-8 mb-8">
          <img 
            src="https://source.unsplash.com/random/300x300?podcast" 
            alt="podcast cover" 
            className="rounded-xl w-64"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">The Future of AI in Healthcare</h2>
            <p className="text-gray-300 mb-4">Episode 42 • AI Revolution Podcast</p>
            <div className="flex space-x-4">
              <button className="glass-effect px-4 py-2 rounded-lg">
                + Add to Playlist
              </button>
              <button className="glass-effect px-4 py-2 rounded-lg">
                Share Episode
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div 
            className="progress-bar" 
            ref={progressBarRef}
            onClick={handleProgressClick}
          >
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span>24:15</span>
            <div className="flex items-center space-x-6">
              <button className="player-control">⏮</button>
              <button className="player-control">⏯</button>
              <button className="player-control">⏭</button>
            </div>
            <span>54:30</span>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-xl p-8 mt-8">
        <h3 className="text-2xl font-bold mb-4">Episode Notes</h3>
        <div className="prose text-gray-300">
          <p>In this episode, we explore the revolutionary impact of AI in healthcare...</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;