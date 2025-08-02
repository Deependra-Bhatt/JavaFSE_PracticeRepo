import React from "react";

// Odd Player Component using destructuring
export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </div>
  );
}

// Even Player Component using destructuring
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
    </div>
  );
}

// Merging two arrays using spread operator
export const ListOfIndianPlayers = () => {
  const T20Players = ["First Player", "Second Player", "Third Player"];
  const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};
