import react, { Component } from 'react'

class Dice extends Component{

    render(){
        return(
            <>
            <h1>Dice Roller</h1> 
            <h3>YOUR ROLL IS!: {this.props.roll} </h3>
            <button onClick={this.props.integer}>Click to Roll</button>
            </>
        )
    }
}
export default Dice 