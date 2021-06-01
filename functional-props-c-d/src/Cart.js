import React, { Component } from 'react'

class Cart extends Component{
    render(){
        return(
            <>
            <ul>
                {this.props.cartItem.map((value, index)=>{
                    return (
                        <li key = {index}>
                            <button onClick = { ()=>this.props.addFood(value)}>
                                {value}
                            </button>
                        </li>
                    )
                })}
            </ul>

            </>
        )
    }
}







export default Cart;