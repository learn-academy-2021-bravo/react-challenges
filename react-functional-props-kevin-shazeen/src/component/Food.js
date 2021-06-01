import React, { Component } from "react";

export default class Food extends Component {
  render() {
    return (
      <div>
        {this.props.foodItems.map((foodObj, index) => {
          return (
            <div key={index}>
              <p>Pizza: {foodObj.foodName}</p>
              <p>Price: {foodObj.price}</p>
              <button onClick={() => this.props.addToOrder(foodObj)}>
                add
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
