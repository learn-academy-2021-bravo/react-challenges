import React, { Component } from "react";
import "./App.css"
class App extends Component {
  constructor(){
    super()
    this.state = {
      color: ["green", "blue", "yellow", "red", "purple", "orange"],
      currentColor: "click me"
    }
  }
  colorChange = () => {
    let randoNum = Math.floor(Math.random()*this.state.color.length)
    this.setState({
      currentColor: this.state.color[randoNum]
    })
  }
  render() {
    return (
      <>
      <div className="square" onClick={this.colorChange}>{this.state.currentColor}</div>
      </>
    )
  }
}
export default App;