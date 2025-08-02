import React, { useState } from "react";
import "./App.css";

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Login</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>Logout</button>;
}

function GuestGreeting() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>You can browse flights, but please login to book tickets.</p>
      <FlightDetails />
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <p>You can now book your tickets.</p>
      <FlightDetails />
      <TicketBooking />
    </div>
  );
}

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function FlightDetails() {
  return (
    <div className="flight-details">
      <h3>Available Flights:</h3>
      <ul>
        <li>Flight: IND202 <br/> From: Delhi  To: Mumbai <br/> Time: 10:00 AM</li><br/>
        <li>Flight: IND302 <br/> From: Bangalore  To: Chennai <br/> Time: 1:30 PM</li><br/>
        <li>Flight: IND402 <br/> From: Kolkata  To: Pune <br/> Time: 6:00 PM</li><br/>
      </ul>
    </div>
  );
}

function TicketBooking() {
  return (
    <div className="booking-section">
      <h3>Book Your Ticket</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Ticket booked successfully!");
      }}>
        <input type="text" placeholder="Passenger Name" required />
        <br /><br />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <h1> Flight Ticket Booking App</h1>

      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}

      <br/><br/>

      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
