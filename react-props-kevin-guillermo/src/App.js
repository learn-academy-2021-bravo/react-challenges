import react, { Component } from 'react'
import Dice from './components/Dice.js'
import RollList from './components/RollList.js'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentNumber: 0,
            numberBucket: [],
        }
    }


  handleDice = () => {
      let nextRoll = Math.ceil(Math.random() * 6)
      this.state.numberBucket.push(nextRoll)
      this.setState({currentNumber: nextRoll })

  }

  render(){
      return(
          <>
          <div className = "Dice">
          <Dice
          roll={this.state.currentNumber}
          integer={this.handleDice}
          />
          </div>
          {this.state.numberBucket.map((value) => {
           return <RollList 
            number={value}/>
          })}
          

          </>
      )
  }
}

export default App