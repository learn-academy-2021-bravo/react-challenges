import React, {Component} from "react"

class DisplayFood extends Component{
render(){
  return(
    <>
    <li>
      <button onClick={() => this.props.foodItem()}>{this.props.foodItem}<span>{`    $${this.props.price}`}</span></button>
      </li>
    </>

  )
}
}

export default DisplayFood