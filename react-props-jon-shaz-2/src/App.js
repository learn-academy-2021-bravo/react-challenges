import React, { Component } from 'react'
import Dice from './Dice'
import Rolls from "./Rolls"
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      dice: [1,2,3,4,5,6],
      currentRoll: 0,
      allRolls: []
    }
  }
  diceRoll = () => {
    let randoNum = Math.floor(Math.random() * this.state.dice.length)
    this.setState({currentRoll: this.state.dice[randoNum]
    })

  }

  render() {
    return (
      <div>
        <h1>
          App Component 
          

        </h1>
        <Dice
        diceRoll ={this.diceRoll}
        currentRoll = {this.state.currentRoll}

        />
        <Rolls/>


      </div>
    )
  }
}
 