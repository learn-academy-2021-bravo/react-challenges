import React, {Component} from 'react'
import PirateRobot from './Component/PirateRobot'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      userInput: ""
    }
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value})
  }

    render(){
    return(
      <>
        <h1>Robot Repeating App</h1>
        <input 
          type= "text"
          value={this.state.userInput}
          onChange={this.handleChange} />
        <PirateRobot input= {this.state.pirateInput} />
           
      </>
    );
  }
    
  
}

export default App;
