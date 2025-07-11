// ats-dashboard-multitab/pages/index.js

import { useState } from "react";
import Head from "next/head";

const TABS = [
  "Home",
  "ROI Tracker",
  "Parlay Generator",
  "Player Rankings",
  "Live Games",
  "Win Totals",
  "Model Logs",
];

const weekData = [
  {
    matchup: "Florida State vs Georgia Tech",
    confidence: "86.7%",
    bet: "ATS - FSU -7.5",
    chaosRisk: "Low",
    depthGap: "Moderate",
    clvEdge: "+2.5 pts",
    tapeProxy: "Verified",
    blindspot: "✅ Yes",
  },
  {
    matchup: "Texas A&M vs Notre Dame",
    confidence: "91.3%",
    bet: "ML - Texas A&M",
    chaosRisk: "Medium",
    depthGap: "Low",
    clvEdge: "+1.0 pts",
    tapeProxy: "Unscouted QB",
    blindspot: "No",
  },
];

const testBets = [
  {
    game: "Florida State vs Georgia Tech",
    bet: "ATS - FSU -7.5",
    odds: "-110",
    result: "Win",
    clv: "+2.5",
    confidence: "86.7%",
    grade: "A",
    source: "Model",
  },
  {
    game: "Texas A&M vs Notre Dame",
    bet: "ML - Texas A&M",
    odds: "+120",
    result: "Loss",
    clv: "-0.5",
    confidence: "91.3%",
    grade: "C+",
    source: "Model",
  },
  {
    game: "Utah vs Houston",
    bet: "Over 53.5",
    odds: "-110",
    result: "Win",
    clv: "+1.0",
    confidence: "79.1%",
    grade: "B+",
    source: "Manual",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    if (activeTab === "Home") {
      return (
        <div className="space-y-6 mt-6">
          {weekData.map((game, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-blue-300 mb-2">{game.matchup}</h2>
              <p><strong>Confidence:</strong> {game.confidence}</p>
              <p><strong>Bet:</strong> {game.bet}</p>
              <p><strong>Chaos Risk:</strong> {game.chaosRisk} | <strong>Depth Gap:</strong> {game.depthGap}</p>
              <p><strong>CLV Edge:</strong> {game.clvEdge}</p>
              <p><strong>Tape Proxy:</strong> {game.tapeProxy}</p>
              <p><strong>Blindspot:</strong> {game.blindspot}</p>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "ROI Tracker") {
      return (
        <div className="mt-6 text-white">
          <table className="w-full text-sm border border-gray-700">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="p-2">Game</th>
                <th>Bet</th>
                <th>Odds</th>
                <th>Result</th>
                <th>CLV</th>
                <th>Confidence</th>
                <th>Grade</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {testBets.map((bet, i) => (
                <tr key={i} className="text-center border-t border-gray-600">
                  <td className="p-1">{bet.game}</td>
                  <td>{bet.bet}</td>
                  <td>{bet.odds}</td>
                  <td>{bet.result}</td>
                  <td>{bet.clv}</td>
                  <td>{bet.confidence}</td>
                  <td>{bet.grade}</td>
                  <td>{bet.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className="text-white mt-6 text-center">
        <em>{activeTab} tab coming soon...</em>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-6">
      <Head>
        <title>ATS Dashboard</title>
      </Head>
      <h1 className="text-3xl font-bold text-center text-cyan-400 mb-4">ATS Dashboard</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200 ${
              activeTab === tab ? "bg-cyan-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
}
