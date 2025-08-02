import React from "react";

export function ListOfPlayers({ players }) {
  return (
    <div>
      <ul>
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ScoreBelow70({ players }) {
  const filteredPlayers = players.filter((player) => player.score <= 70);
  return (
    <div>
      <ul>
        {filteredPlayers.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
