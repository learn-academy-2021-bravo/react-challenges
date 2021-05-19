import React, { Component } from 'react'
import Food from './component/Food'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      foodItems: [
        {
          foodName: "Cheese Burger", 
          price: 5
        },
        {
          foodName: "Muffin",
          price: 3
        }
      ],
      order: []
    }
  }
addToOrder= (foodItem) => {
  this.setState({
    order: [...this.state.order, foodItem] 
  })
}


  render() {
    return (
      <div>
        <h1>Italian Restaurant</h1>
        <Food foodItems={this.state.foodItems} addToOrder={this.addToOrder}/>
        <h3>Orders:</h3>
        {this.state.order.map((ordItems, index)=> {
          return <p key={index} >{ordItems}</p>
        })}
      </div>
    )
  }
}
