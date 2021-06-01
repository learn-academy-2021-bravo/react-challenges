import React, { Component } from 'react'

export default class Dice extends Component {
    render() {
        return (
            <div>
               <h3>
                

                 {this.props.currentRoll}
            </h3> 
          <button onClick={this.props.diceRoll}>Click Me To Roll</button>
            </div>
        )
    }
}
