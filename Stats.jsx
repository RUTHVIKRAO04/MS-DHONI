import { stats } from '../data/dhoniData';
import './Stats.css';

function Stats() {
  return (
    <div className="stats section">
      <div className="container">
        <h2 className="section-title">Career Statistics</h2>
        
        <div className="stats-grid">
          <div className="stats-card">
            <h3>Test Cricket</h3>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-label">Matches</span>
                <span className="stat-value">{stats.tests.matches}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Runs</span>
                <span className="stat-value">{stats.tests.runs}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Average</span>
                <span className="stat-value">{stats.tests.average}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Hundreds</span>
                <span className="stat-value">{stats.tests.hundreds}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Fifties</span>
                <span className="stat-value">{stats.tests.fifties}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Highest Score</span>
                <span className="stat-value">{stats.tests.highestScore}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Catches</span>
                <span className="stat-value">{stats.tests.catches}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Stumpings</span>
                <span className="stat-value">{stats.tests.stumpings}</span>
              </div>
            </div>
            <div className="captaincy-stats">
              <h4>As Captain</h4>
              <div className="stats-content">
                <div className="stat-item">
                  <span className="stat-label">Matches</span>
                  <span className="stat-value">{stats.tests.captaincy.matches}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Wins</span>
                  <span className="stat-value">{stats.tests.captaincy.wins}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Losses</span>
                  <span className="stat-value">{stats.tests.captaincy.losses}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Draws</span>
                  <span className="stat-value">{stats.tests.captaincy.draws}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <h3>ODI Cricket</h3>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-label">Matches</span>
                <span className="stat-value">{stats.odis.matches}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Runs</span>
                <span className="stat-value">{stats.odis.runs}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Average</span>
                <span className="stat-value">{stats.odis.average}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Hundreds</span>
                <span className="stat-value">{stats.odis.hundreds}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Fifties</span>
                <span className="stat-value">{stats.odis.fifties}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Highest Score</span>
                <span className="stat-value">{stats.odis.highestScore}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Catches</span>
                <span className="stat-value">{stats.odis.catches}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Stumpings</span>
                <span className="stat-value">{stats.odis.stumpings}</span>
              </div>
            </div>
            <div className="captaincy-stats">
              <h4>As Captain</h4>
              <div className="stats-content">
                <div className="stat-item">
                  <span className="stat-label">Matches</span>
                  <span className="stat-value">{stats.odis.captaincy.matches}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Wins</span>
                  <span className="stat-value">{stats.odis.captaincy.wins}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Losses</span>
                  <span className="stat-value">{stats.odis.captaincy.losses}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">No Result</span>
                  <span className="stat-value">{stats.odis.captaincy.noResult}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <h3>T20I Cricket</h3>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-label">Matches</span>
                <span className="stat-value">{stats.t20is.matches}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Runs</span>
                <span className="stat-value">{stats.t20is.runs}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Average</span>
                <span className="stat-value">{stats.t20is.average}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Fifties</span>
                <span className="stat-value">{stats.t20is.fifties}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Highest Score</span>
                <span className="stat-value">{stats.t20is.highestScore}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Catches</span>
                <span className="stat-value">{stats.t20is.catches}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Stumpings</span>
                <span className="stat-value">{stats.t20is.stumpings}</span>
              </div>
            </div>
            <div className="captaincy-stats">
              <h4>As Captain</h4>
              <div className="stats-content">
                <div className="stat-item">
                  <span className="stat-label">Matches</span>
                  <span className="stat-value">{stats.t20is.captaincy.matches}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Wins</span>
                  <span className="stat-value">{stats.t20is.captaincy.wins}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Losses</span>
                  <span className="stat-value">{stats.t20is.captaincy.losses}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">No Result</span>
                  <span className="stat-value">{stats.t20is.captaincy.noResult}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <h3>IPL Career</h3>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-label">Matches</span>
                <span className="stat-value">{stats.ipl.matches}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Runs</span>
                <span className="stat-value">{stats.ipl.runs}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Average</span>
                <span className="stat-value">{stats.ipl.average}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Fifties</span>
                <span className="stat-value">{stats.ipl.fifties}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Highest Score</span>
                <span className="stat-value">{stats.ipl.highestScore}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">IPL Titles</span>
                <span className="stat-value">{stats.ipl.titles}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Finals</span>
                <span className="stat-value">{stats.ipl.finishes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;



