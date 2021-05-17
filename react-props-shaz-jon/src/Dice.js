import React, { Component } from "react";

export default class Dice extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.currentRoll}</h1>
        <button onClick={this.props.rollDice}>click to roll</button>
      </div>
    );
  }
}
