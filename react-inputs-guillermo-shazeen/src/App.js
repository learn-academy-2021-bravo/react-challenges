import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Robo active listening</h1>
        <label htmlFor = "statement">say something</label>
        <input type = "text" name = "statement" id = "statement" />

        <GoodRobot/>
        <BadRobot/>
        <KanyeBot/>
        
      </div>
    )
  }
}
