
import { useState } from 'react';
import data from '../data/week-data.json';

const tabs = [
  'Home',
  'ROI Tracker',
  'Parlay Generator',
  'Player Rankings',
  'Live Games',
  'Win Totals',
  'Model Logs'
];

const tagColor = (type, value) => {
  const map = {
    chaos_risk: { Low: 'green', Medium: 'orange', High: 'red' },
    depth_gap: { Low: 'green', Moderate: 'orange', High: 'red' }
  };
  return map[type]?.[value] || 'gray';
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#111', color: '#fff', minHeight: '100vh', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', color: '#00e1ff' }}>ATS Dashboard</h1>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: activeTab === tab ? '#00e1ff' : '#333',
              color: activeTab === tab ? '#000' : '#fff',
              fontWeight: 'bold'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Home' && (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {data.map((game, idx) => (
            <div key={idx} style={{
              border: '1px solid #333',
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: '#1c1c1c',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)'
            }}>
              <h2 style={{ color: '#00e1ff' }}>{game.teams}</h2>
              <p><strong>Confidence:</strong> {game.confidence}%</p>
              <p><strong>Bet:</strong> {game.suggested_bet}</p>
              <p>
                <strong>Chaos Risk:</strong>{' '}
                <span style={{ color: tagColor('chaos_risk', game.chaos_risk) }}>{game.chaos_risk}</span> |
                <strong> Depth Gap:</strong>{' '}
                <span style={{ color: tagColor('depth_gap', game.depth_gap) }}>{game.depth_gap}</span>
              </p>
              <p><strong>CLV Edge:</strong> {game.clv_edge}</p>
              <p><strong>Tape Proxy:</strong> {game.tape_proxy}</p>
              <p><strong>Blindspot:</strong> {game.blindspot_alert ? '✅ Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab !== 'Home' && (
        <div style={{ textAlign: 'center', marginTop: '4rem', color: '#888' }}>
          <p><em>{activeTab} tab coming soon...</em></p>
        </div>
      )}
    </div>
  );
}
