import React from "react";
import { ListOfPlayers, ScoreBelow70 } from "./Components/ListOfPlayers";
import {
  OddPlayers,
  EvenPlayers,
  ListOfIndianPlayers,
} from "./Components/IndianPlayers";

function App() {
  const flag = true;

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 65 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 65 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 },
  ];

  const IndianTeam = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvraj", "Raina"];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListOfPlayers players={players} />
        <hr />
        <h1>List of Players having score less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h2>Odd Players</h2>
        {OddPlayers(IndianTeam)}
        <h2>Even Players</h2>
        {EvenPlayers(IndianTeam)}
        <hr />
        <h2>List of Players Merged:</h2>
        <ListOfIndianPlayers />
      </div>
    );
  }
}

export default App;
