import React, { Component } from 'react'

class PreviousRolls extends Component {

    render(){
        return(
            <>
            <h3>
                Rolled Dice Register: {this.props.rollRegister.map(value => {
                    return (
                    <p>{value}</p>
                )
            } )}
            </h3>
            </>
        )
    }
}
export default PreviousRolls
