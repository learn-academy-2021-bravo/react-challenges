import React, { Component } from 'react'

export default class Food extends Component {
    render() {
        return (
            <div>
                <h1>Food</h1>
                {
                    this.props.foodItems.map((foodObj, index)=>{
                        return (
                            <div key={index}>
                                <p>Dinner Item: {foodObj.foodName}</p>
                                <p>Price: {foodObj.price}</p>
                                <button onClick={() => this.props.addToOrder(foodObj.foodName)}>Add To Order</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
