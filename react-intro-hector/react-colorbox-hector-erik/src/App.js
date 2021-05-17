import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

   
    }
    handleChange = () => {

    }
  }
  render() {
    return(
      <>
      <div className="box" onClick={ this.handleChange}></div>
      <button onClick = { this.handleChange }>Click Me!</button>
      

 </>

    )
  }
}




export default App;
