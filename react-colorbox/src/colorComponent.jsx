import React, { Component } from `react`

class Color extends Component {
    constructor(props){
        super(props)
        this.state = {
            color:""
        }
    }
    render(){
        let { color } = this.state
    }
}