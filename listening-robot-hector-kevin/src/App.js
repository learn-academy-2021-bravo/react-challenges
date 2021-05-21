import React, { Component } from 'react'
import GoodBot from './component/GoodBot'
 class App extends Component {
   constructor(props){
     super(props)
     this.state = {
       userInput: ""

     }
   }

  render() {
    return (
      <div>
        <input/>
        <h3>Good Robot</h3>
        <GoodBot/>
        
      </div>
    )
  }
}

export default App