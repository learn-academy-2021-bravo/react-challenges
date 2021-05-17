import React, {Component} from "react";

class DiceComponent extends Component{
   
    render(){
        const {randomNumber} = this.props

        return (
        <div style={{width:"200px", height:"200px", fontSize:"200px"}}>
           {randomNumber}
        </div>
        )
    }
} 


export default DiceComponent;