import React, { useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const incrementValue = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    alert("Hello Member! Counter incremented.");
  };

  const incrementHandler = () => {
    incrementValue();
    sayHello();
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <p>{count}</p>

      <button onClick={incrementHandler}>Increment</button>
      <br/>
      <button onClick={decrementHandler}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("Welcome!")}>
        Say Welcome
      </button>
      <br />

      <button onClick={handleClick}>Click on me</button>
      <br/>


      <CurrencyConvertor />
    </div>
  );
}

export default App;
