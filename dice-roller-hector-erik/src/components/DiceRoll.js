import React, { Component } from 'react'

class DiceRoll extends Component {

    render(){
        return(
            <>
            <h3>Current Roll: {this.props.currentRoll}</h3>
            <button onClick={this.props.roll}>Click Me To Roll</button>
            </>
        )
    }
}
export default DiceRoll 