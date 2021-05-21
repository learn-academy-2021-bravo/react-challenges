import React, {Component} from 'react'

class PirateRobot extends Component {

  pirateInput = (string) =>{
    return string
  }
  render(){
    return(
      <>
      <h3>Pirate Robot</h3>
      <p>{this.pirateInput(this.props.input)}, arrrrggghhhh me matey </p>

      </>
    )
  }
}




export default PirateRobot;