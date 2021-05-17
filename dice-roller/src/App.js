import React, { Component } from 'react';
import DiceComponent from "./diceComponent";
import DisplayNumbers from "./numbersComponent";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      diceNumbers : [1,2,3,4,5,6],
      randomNumber:0,
      previousNumber : [] 
    }
  }

  render(){
                 
    const buttonClick = () => {
      let index = Math.floor(Math.random() * 6);
      this.setState({randomNumber:this.state.diceNumbers[index]});
      this.state.previousNumber.push(this.state.diceNumbers[index]);
    }
    return(
      <div>
        <button onClick={() => {buttonClick()}}>Click me!</button>
        <DiceComponent randomNumber = {this.state.randomNumber} />
        <DisplayNumbers previousNumber ={this.state.previousNumber} />
      </div>
    )
  }
}
export default App