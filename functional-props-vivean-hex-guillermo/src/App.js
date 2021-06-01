import React, { Component } from 'react'
import './App.css'
import  Menu from'./component/Menu'

// As a developer, I am tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.

// As a user, I can see an application that has a list of food items and the price of each item
// As a user, I can select an item I wish to order
// As a user, I can see the items I have selected displayed on the page


//I need a constructor
//If we are going to a state, we need a constructor,
//state is an object, state manages data
//
class App extends Component{
constructor(props){
  super(props)
  this.state = {
    foodandPrice: [ 
      {food: "burgers",  price: 1.50},
      {food: "burgers",  price: 1.50},
      {food: "burgers",  price: 1.50},
      {food: "burgers",  price: 1.50}
    ],
    cart: []
  }
}



  render() {
    return (
      <>
        <h1>HVG Foods</h1>
        <h3>Menu</h3>
        <Menu cartItem={ this.state. foodandPrice} />
      </>
    )
  }
} 

export default App