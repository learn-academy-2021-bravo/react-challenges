import React, { Component } from "react";
import "./App.css";
import Dice from "./Dice";
import Rolls from "./Rolls";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dice: [1, 2, 3, 4, 5, 6],
      currentRoll: 0,
      allRolls: [],
    };
  }

  rollDice = () => {
    let randoNum = Math.floor(Math.random() * this.state.dice.length);
    this.setState({
      currentRoll: this.state.dice[randoNum],
    });
    this.state.allRolls.push(this.state.dice[randoNum]);
    console.log(this.state.allRolls);
  };

  render() {
    return (
      <div>
        <h1>Dice Roll Game</h1>
        <Dice rollDice={this.rollDice} currentRoll={this.state.currentRoll} />

        {this.state.allRolls.map((num, index) => {
          return <Rolls key={index} num={num} />;
        })}
      </div>
    );
  }
}
