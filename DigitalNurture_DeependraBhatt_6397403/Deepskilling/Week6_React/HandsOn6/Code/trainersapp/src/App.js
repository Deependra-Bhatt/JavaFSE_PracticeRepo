import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainerList from './trainerlist';
import TrainerDetail from './TrainerDetails';
import trainersMock from './trainermock';

function App() {
  return (
    <Router>
      <div>
        <h1>My Academy Trainers App </h1>
        <nav style={{marginBottom:'10px'}}>
          <Link to="/" style={{marginRight:'10px'}}>Home</Link>
          <Link to="/trainersmock">Show Trainers</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/trainersmock" element={<TrainerList trainers={trainersMock}/>}/>  
          <Route path="/trainer/:id" element={<TrainerDetail />}/>        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
