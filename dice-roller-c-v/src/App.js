import React, { Component } from 'react'
import DiceRoller from './DiceRoller'
import PreviousRolls from './PreviousRolls'

class App extends Component{
  constructor(props){
  super(props)
  this.state= {
    currentNumber: null,
    previousRolls: []
  }
}

handleNumber = () => {
  let nextNumber = Math.ceil(Math.random() * 6)
  this.state.previousRolls.push(nextNumber)
  this.setState({ currentNumber: nextNumber })
}

render(){
  return(
    <>
    <DiceRoller
    number={this.state.currentNumber}
    dieFace={this.handleNumber}
    />
  {this.state.previousRolls.map((value) => {
    return <PreviousRolls prop={value} />;
  })}
</>
  );
}
}

export default App
