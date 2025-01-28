import { useState } from 'react'
import './leader.css'

function App() {
  const [leaderboardData] = useState([
    { id: 1, name: "Alex Thompson", score: 98 },
    { id: 2, name: "Sarah Chen", score: 95 },
    { id: 3, name: "Mike Johnson", score: 89 },
    { id: 4, name: "Emma Davis", score: 82 },
    { id: 5, name: "James Wilson", score: 78 },
    { id: 6, name: "Lisa Anderson", score: 75 },
    { id: 7, name: "David Kim", score: 72 },
    { id: 8, name: "Rachel Moore", score: 68 }
  ]);

  const getScoreWidth = (score) => {
    const maxScore = Math.max(...leaderboardData.map(item => item.score));
    return (score / maxScore) * 100;
  };

  return (
    <div className="app-container">
      <div className="glass-container">
        <h1>Leaderboard</h1>
        <div className="leaderboard">
          {leaderboardData.map((player, index) => (
            <div className="leaderboard-row" key={player.id}>
              <div className="rank-badge">{index + 1}</div>
              <div className="player-info" style={{ '--score-width': `${getScoreWidth(player.score)}%` }}>
                <div className="score-bar"></div>
                <div className="player-details">
                  <span className="player-name">{player.name}</span>
                  <span className="player-score">{player.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App