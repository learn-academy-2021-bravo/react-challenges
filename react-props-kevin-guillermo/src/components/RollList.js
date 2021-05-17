import React, { Component } from 'react'

export default class RollList extends Component {
    render() {
        return (
            <div>
                <h1>past roll {this.props.number}</h1>
            </div>
        )
    }
}
