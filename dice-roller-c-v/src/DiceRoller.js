import React, { Component } from 'react'
class DiceRoller extends Component{
    render(){
        return(
            <div>
            <h1> This is your Roll { this.props.number}!</h1>
            <button onClick={ this.props.dieFace }> Roll the Dice</button>
            </div>
        )
    }
}









export default DiceRoller