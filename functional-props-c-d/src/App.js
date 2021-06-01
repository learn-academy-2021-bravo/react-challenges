import React, { Component } from 'react'
import './App.css'
import Cart from './Cart'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodItems: ["Banana $0.25", "Sausage $4.50", "Bacon $10.00", "Potatoes $2.52", "Tacos $2.50", "Bread $1.43"],
      shoppingCart: []
    }
  }
addFood = (item) =>{
  this.setState ({ shoppingCart: [...this.state.shoppingCart, item]})
}

render(){
  return (
    <>
    <h1>Grocery Store</h1>
    <Cart
    cartItem = {this.state.foodItems}
    addFood = {this.addFood}/>
    <h2>Cart</h2>
    <ul>
      {this.state.shoppingCart.map((value, index)=>{
        return <li key={index}>{value}</li>
      })}
    </ul>
    
    </>
  )
}

}
export default App;
