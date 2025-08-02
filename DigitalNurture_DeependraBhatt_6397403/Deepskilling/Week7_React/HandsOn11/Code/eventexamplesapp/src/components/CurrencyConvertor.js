import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Euro");

  const handleSubmit = (e) => {
    e.preventDefault();

    const rate = 80; // 1 Euro = 80 INR
    const result = parseFloat(amount) * rate;

    if (!isNaN(result)) {
      alert(`Converted to ${currency}, Amount is ${result}`);
    } else {
      alert("Please enter a valid amount");
    }
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Euro">Euro</option>
            <option value="Dollar">Dollar (Not Implemented)</option>
          </select>
        </div>

        <button style={{marginLeft:'50px'}} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
