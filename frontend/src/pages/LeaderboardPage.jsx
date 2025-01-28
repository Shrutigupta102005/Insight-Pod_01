import React from 'react';

function LeaderboardPage() {
  const leaderboardData = [
    {
      rank: 1,
      username: 'TechExplorer',
      points: 2450,
      weeklyGain: 350,
      avatar: 'https://source.unsplash.com/random/40x40?person'
    }
    // Add more users as needed
  ];

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">Top Listeners This Week</h2>
      <div className="glass-effect rounded-xl p-8">
        <div className="space-y-6">
          {leaderboardData.map((user, index) => (
            <div key={index} className="leaderboard-item flex items-center justify-between p-4 glass-effect rounded-lg">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-cyan-400">{user.rank}</span>
                <img src={user.avatar} alt={user.username} className="rounded-full w-10 h-10" />
                <span className="font-semibold">{user.username}</span>
              </div>
              <div className="flex items-center space-x-8">
                <span>{user.points} Points</span>
                <span className="text-cyan-400">+{user.weeklyGain} This Week</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderboardPage;