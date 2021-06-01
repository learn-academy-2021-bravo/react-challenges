import React, {Component} from 'react'


class App extends Component{
    constructor(props){
    this.state = {
        runColor: "red"
    }
}
  render() {
    return(
      <>
        <p style ={ {color: this.state.runColor} }></p>
        <div id="square">{this.state.runColor}</div>
      </>
        )
        }
    }

export default App