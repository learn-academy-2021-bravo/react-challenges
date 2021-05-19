import React, { Component } from "react";

export default class TotalOrders extends Component {
  render() {
    return (
      <div>
        <p>Total Orders</p>
        <p>Total: {this.props.totalPrice}</p>
        {this.props.order.map((foodName, index) => {
          return <p key={index}>{foodName}</p>;
        })}
      </div>
    );
  }
}
