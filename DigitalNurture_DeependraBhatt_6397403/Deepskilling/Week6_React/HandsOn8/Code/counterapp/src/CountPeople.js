import React, { Component } from "react";
import "./newStyle.css";

class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  };

  updateExit = () => {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="box">
          <button onClick={this.updateEntry}>Login</button>
          <div className="message">
            {this.state.entrycount} People Entered!!!
          </div>
        </div>

        <div className="box">
          <button onClick={this.updateExit}>Exit</button>
          <div className="message">{this.state.exitcount} People Left!!!</div>
        </div>
      </div>
    );
  }
}

export default CountPeople;
