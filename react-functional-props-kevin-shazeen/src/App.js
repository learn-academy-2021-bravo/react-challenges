import React, { Component } from "react";
import Food from "./component/Food";
import TotalOrders from "./component/TotalOrders";
/*
As a developer, I am tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.

-As a user, I can see an application that has a list of food items and the price of each item
-As a user, I can select an item I wish to order
-As a user, I can see the items I have selected displayed on the page
Stretch Challenges

-As a user, I can see the total cost of my current order
-As a user, I can see both the base total of my food selections and the total that includes sales tax
-As a user, I can see the total that includes sales tax rounded to two decimals
-As a user, I can see an image of my food selection on the menu
*/
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      foodItems: [
        {
          foodName: "Cheese Pizza",
          price: 10,
        },
        {
          foodName: "Peparoni Pizza",
          price: 15,
        },
      ],
      order: [],
      totalPrice: 0,
    };
  }
  addToOrder = (foodObj) => {
    this.setState({
      order: [...this.state.order, foodObj.foodName],
      totalPrice: this.state.totalPrice + foodObj.price,
    });
  };
  render() {
    return (
      <div>
        <h1>Pizza Restaurant</h1>
        <Food foodItems={this.state.foodItems} addToOrder={this.addToOrder} />
        <TotalOrders
          order={this.state.order}
          totalPrice={this.state.totalPrice}
        />
      </div>
    );
  }
}
